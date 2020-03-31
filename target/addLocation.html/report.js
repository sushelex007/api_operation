$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/placeValidation4.feature");
formatter.feature({
  "name": "validating place API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify place is added successfully with different values",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add place API payload with parameters \"\u003cname\u003e\" \"\u003clanguage\u003e\" and \"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http method",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got successfull with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" is response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"scope\" is response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify place_id created maps to \"\u003cname\u003e\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "language",
        "address"
      ]
    },
    {
      "cells": [
        "sushil",
        "hindi",
        "laxmipur"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify place is added successfully with different values",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Add place API payload with parameters \"sushil\" \"hindi\" and \"laxmipur\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.add_place_API_payload_with_parameters_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.user_calls_with_http_method(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got successfull with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.the_API_call_got_successfull_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" is response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.is_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"scope\" is response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.is_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify place_id created maps to \"sushil\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.verify_place_id_created_maps_to_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify if Delete place functionality is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Delete place payload",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.delete_place_payload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"deletePlaceAPI\" with \"Post\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.user_calls_with_http_method(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" is response body is \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.PlaceAPI.is_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});