import { Request, Response, Router as eRouter } from "express";
import { OrderView } from "../model/interfaces";
import db from "../logic";
import * as api from "../model/interfaces";

export const router = eRouter();

router.get("/", (req: Request, res: Response) => {
        const mockMenus: OrderView = [{
                favourite: false,
                image: "../../assets/images/basil-fried.jpg",
                likes: 21,
                options: [
                        { name: "Tofu", price: 1, selected: false },
                        { name: "Chiken", price: 1, selected: false },
                        { name: "Pork", price: 2, selected: false }],
                orderDescription:
                "Lorem ipsum dolor sit amet. Proin fermentum lobortis neque. " +
                "Pellentesque habitant morbi tristique.",
                orderName: "Red Curry",
                price: 5.90,
        }, {
                favourite: false,
                image: "../../assets/images/garlic-paradise.jpg",
                likes: 10,
                options: [
                        { name: "Tofu", price: 1, selected: false },
                        { name: "Chiken", price: 1, selected: false },
                        { name: "Pork", price: 2, selected: false }],
                orderDescription:
                "Consectetur adipiscing elit. Nulla id viverra turpis, sed eleifend dui. " +
                "Proin fermentum lobortis neque. Pellentesque habitant morbi tristique.",
                orderName: "Purple Curry",
                price: 9.00,
        }, {
                favourite: false,
                image: "../../assets/images/green-curry.jpg",
                likes: 61,
                options: [
                        { name: "Tofu", price: 1, selected: false },
                        { name: "Chiken", price: 1, selected: false },
                        { name: "Pork", price: 2, selected: false }],
                orderDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Nulla id viverra turpis, sed eleifend dui. Proin fermentum lobortis neque.",
                orderName: "Green Curry",
                price: 7.60,
        }, {
                favourite: false,
                image: "../../assets/images/dish.png",
                likes: 48,
                options: [
                        { name: "Tofu", price: 1, selected: false },
                        { name: "Chiken", price: 1, selected: false },
                        { name: "Pork", price: 2, selected: false }],
                orderDescription: "Lorem ipsum dolor. Pellentesque habitant morbi tristique.",
                orderName: "Yellow Curry",
                price: 8.50,
        }];

        db.getDihses((err: api.Error, dishes: api.DishView[]) => {
                if (err){
                        res.status(500).json(err);
                }else{
                        res.json(dishes);
                }
        });
});
