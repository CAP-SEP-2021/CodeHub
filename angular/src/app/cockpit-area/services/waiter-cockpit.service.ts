import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FilterSearchComponent} from 'app/menu/components/menu-filters/filter-search/filter-search.component';
import {
  BookingInfo,
  Filter,
  FilterCockpit,
  OrderLineInfo,
  Pageable,
  Sort,
} from 'app/shared/backend-models/interfaces';
import {cloneDeep, map} from 'lodash';
import {Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
import {ConfigService} from '../../core/config/config.service';
import {SnackBarService} from '../../core/snack-bar/snack-bar.service';
import {
  BookingResponse,
  DishResponse,
  DishView,
  OrderDishResponse,
  OrderListView,
  OrderResponse,
  OrderView,
  OrderViewResult,
  PlateView, SaveOrderResponse,
} from '../../shared/view-models/interfaces';
import {PriceCalculatorService} from '../../sidenav/services/price-calculator.service';
import {TranslocoService} from '@ngneat/transloco';
import {Subscription} from 'rxjs';
import * as fromOrder from "../../sidenav/store/selectors/order.selectors";
import {Order} from "../../menu/models/order.model";


@Injectable()
export class WaiterCockpitService {
  private readonly getReservationsRestPath: string =
    'bookingmanagement/v1/booking/search';
  private readonly getOrdersRestPath: string =
    'ordermanagement/v1/order/search';
  private readonly filterOrdersRestPath: string =
    'ordermanagement/v1/order/search';
  private readonly getOrderStatusUpdateRestPath: string =
    'ordermanagement/v1/order/changeState';
  private readonly getOrderPaidUpdateRestPath: string =
    'ordermanagement/v1/order/paid';
  private readonly getOrderUpdateRestPath: string =
    'ordermanagement/v1/order/change';

  private readonly getOrderRestPath: string = 'ordermanagement/v1/order';
  private readonly saveOrdersPath: string = 'ordermanagement/v1/order';

  private readonly restServiceRoot$: Observable<string> =
    this.config.getRestServiceRoot();
  private translocoSubscription = Subscription.EMPTY;

  constructor(
    private http: HttpClient,
    private priceCalculator: PriceCalculatorService,
    private config: ConfigService,
    public snackBar: SnackBarService,
    private translocoService: TranslocoService,
  ) {
  }

  getOrders(
    pageable: Pageable,
    sorting: Sort[],
    filters: FilterCockpit,
  ): Observable<OrderResponse[]> {
    let path: string;
    filters.pageable = pageable;
    filters.pageable.sort = sorting;
    if (filters.email || filters.bookingToken || filters.orderStatus) {
      path = this.filterOrdersRestPath;
    } else {
      delete filters.email;
      delete filters.bookingToken;
      delete filters.orderStatus;
      path = this.getOrdersRestPath;
    }
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<OrderResponse[]>(`${restServiceRoot}${path}`, filters),
      ),
    );
  }

  updateOrderStatus(orderID: any, status: any): Observable<OrderListView[]> {
    this.translocoSubscription = this.translocoService
      .selectTranslate('alerts.orderStatus.statusSuccess')
      .subscribe((alert) => this.snackBar.openSnack(alert, 4000, 'green'));
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<OrderListView[]>(
          `${restServiceRoot}${this.getOrderStatusUpdateRestPath}`,
          // `${restServiceRoot}${this.getOrderRestPath}${orderID}`,
          {id: orderID, orderStatus: status},
        ),
      ),
    );
  }

  updatePaid(orderID: any, paid: any): Observable<OrderListView[]> {
    if (paid) {
      this.translocoSubscription = this.translocoService
        .selectTranslate('alerts.paid.paidSuccess')
        .subscribe((alert) => this.snackBar.openSnack(alert, 4000, 'green'));
    } else {
      this.translocoSubscription = this.translocoService
        .selectTranslate('alerts.paid.unpaidSuccess')
        .subscribe((alert) => this.snackBar.openSnack(alert, 4000, 'green'));
    }
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<OrderListView[]>(
          `${restServiceRoot}${this.getOrderPaidUpdateRestPath}`,
          // `${restServiceRoot}${this.getOrderRestPath}${orderID}`,
          {id: orderID, paid: paid},
        ),
      ),
    );
  }

  changeOrder(order: any): Observable<OrderListView> {
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<OrderListView>(
          `${restServiceRoot}${this.getOrderUpdateRestPath}`,
          order,
        ),
      ),
    );
  }

  deleteOrder(orderID: number): Observable<boolean> {
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.get<boolean>(
          `${restServiceRoot}${this.getOrderRestPath}` + orderID,
        ),
      ),
    );
  }

  saveOrder(order: any): Observable<OrderListView> {
    console.log('executing savings !');
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<OrderListView>(
          `${restServiceRoot}${this.saveOrdersPath}`,
          order,
        ),
      ),
    );
  }

  getReservations(
    pageable: Pageable,
    sorting: Sort[],
    filters: FilterCockpit,
  ): Observable<BookingResponse[]> {
    filters.pageable = pageable;
    filters.pageable.sort = sorting;
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<BookingResponse[]>(
          `${restServiceRoot}${this.getReservationsRestPath}`,
          filters,
        ),
      ),
    );
  }

  getTables(filters: any) : Observable<Table[]> {
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<Table[]>(
          `${restServiceRoot}${this.getTableRestPath}`,
          filters,
        ),
      ),
    );
  }

  orderComposer(orderList: OrderView[]): OrderView[] {
    const orders: OrderView[] = cloneDeep(orderList);
    map(orders, (o: OrderViewResult) => {
      o.dish.price = this.priceCalculator.getPrice(o);
      o.extras = map(o.extras, 'name').join(', ');
    });
    return orders;
  }

  orderComposerChange(orderList: OrderView[]): OrderView[] {
    const orders: OrderView[] = cloneDeep(orderList);
    return orders;
  }

  getTotalPrice(orderLines: OrderView[]): number {
    return this.priceCalculator.getTotalPrice(orderLines);
  }

  public sendOrders(order: Order): Observable<SaveOrderResponse> {
    return this.restServiceRoot$.pipe(
      exhaustMap((restServiceRoot) =>
        this.http.post<SaveOrderResponse>(
          `${restServiceRoot}${this.saveOrdersPath}`,
          order,
        ),
      )
    );
  }
}
