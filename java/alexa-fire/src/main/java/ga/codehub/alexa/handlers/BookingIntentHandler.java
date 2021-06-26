/*
     Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file
     except in compliance with the License. A copy of the License is located at

         http://aws.amazon.com/apache2.0/

     or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for
     the specific language governing permissions and limitations under the License.
*/

package ga.codehub.alexa.handlers;

import com.amazon.ask.attributes.AttributesManager;
import com.amazon.ask.dispatcher.request.handler.HandlerInput;
import com.amazon.ask.dispatcher.request.handler.RequestHandler;
import com.amazon.ask.model.*;
import com.google.gson.Gson;

import org.apache.http.HttpResponse;

import ga.codehub.RestDateManager;
import ga.codehub.alexa.Exceptions.AlexaException;
import ga.codehub.entity.booking.Booking;
import ga.codehub.tools.BasicOperations;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

import static com.amazon.ask.request.Predicates.intentName;
import static ga.codehub.alexa.MyThaiStarStreamHandler.BASE_URL;

public class BookingIntentHandler implements RequestHandler {

    @Override
    public boolean canHandle(HandlerInput input) {
        return input.matches(intentName("BookingIntent"));
    }


    @Override
    public Optional<Response> handle(HandlerInput input) {

        AttributesManager attributesManager = input.getAttributesManager();
        Map<String, Object> attributes = attributesManager.getSessionAttributes();

        String speechText = "";
        String name = "";
        String userEmail = "";
        try {
            try {
                name = input.getServiceClientFactory().getUpsService().getProfileName();
                userEmail = input.getServiceClientFactory().getUpsService().getProfileEmail();
            } catch (NullPointerException nullp) {
                speechText = "Deine Alexa braucht zusätzliche Berechtigungen !";
                throw new AlexaException();
            }

            Request request = input.getRequestEnvelope().getRequest();
            IntentRequest intentRequest = (IntentRequest) request;
            Intent intent = intentRequest.getIntent();

            if(intent.getConfirmationStatus().toString().equals("DENIED")){
                speechText = "Die Tischbuchung wurde abgebrochen. Um die Buchung neu zu starten, sagen Sie bitte Tisch buchen.";
            }else {
                Map<String, Slot> slotMap = intent.getSlots();
                if (slotMap.size() != 3) {
                    throw new AlexaException();
                }
                Slot personCount = slotMap.get("count");
                Slot time = slotMap.get("time");
                Slot date = slotMap.get("date");

                String date_time;
                try {
                    date_time = RestDateManager.getDate(date.getValue() + " " + time.getValue());
                } catch (ParseException ex) {
                    speechText = "Da ist was mit der Zeit schiefgelaufen !";
                    throw new AlexaException();
                }
                ga.codehub.entity.booking.Request myApiRequest = new ga.codehub.entity.booking.Request();
                myApiRequest.booking = new Booking();
                myApiRequest.booking.email = userEmail;
                myApiRequest.booking.assistants = personCount.getValue();
                myApiRequest.booking.bookingDate = date_time;
                myApiRequest.booking.name = name;

                BasicOperations bo = new BasicOperations();
                Gson gson = new Gson();
                String payload = gson.toJson(myApiRequest);
                String response;
                ga.codehub.entity.booking.Booking resp;
                try {
                    response = bo.basicPost(payload, BASE_URL + "/mythaistar/services/rest/bookingmanagement/v1/booking");
                } catch (Exception ex) {
                    speechText = "Der my-thai-star Server scheint Probleme mit der Verarbeitung deiner Anfrage zu haben";
                    throw new AlexaException();
                }

                resp = gson.fromJson(response, ga.codehub.entity.booking.Booking.class);
                attributes.put("bookingToken", resp.bookingToken);
                attributesManager.setSessionAttributes(attributes);

                speechText = "Die Tischbuchung war erfolgreich. Bis bald im my-thai-star Restaurant!";
            }

        } catch (AlexaException e) {
            e.printStackTrace();
        }
        return input.getResponseBuilder()
                .withSpeech(speechText)
                .withSimpleCard("MyThaiStar", speechText)
                .build();
    }


}
