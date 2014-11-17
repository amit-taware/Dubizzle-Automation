$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FunctionalTests/Testcases/Dubzzile.feature");
formatter.feature({
  "id": "\"as-a-user-i-want-the-list-of-least-expensive-apartment-to-rent-in-marina-which-have-at-least-two-bathrooms\"",
  "description": "",
  "name": "\"As a user I want the list of least expensive apartment to rent in marina which have at least two bathrooms\"",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 9517109000,
  "status": "passed"
});
formatter.scenario({
  "id": "\"as-a-user-i-want-the-list-of-least-expensive-apartment-to-rent-in-marina-which-have-at-least-two-bathrooms\";get-list-of-least-expensive-apartment-in-marina;;2",
  "tags": [
    {
      "name": "@RegressionTests",
      "line": 4
    },
    {
      "name": "@SmokeTests",
      "line": 4
    }
  ],
  "description": "",
  "name": "Get list of least expensive apartment in marina",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"http://dubai.dubizzle.com/\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \u0027Apartment/Flat for Rent\u0027 link",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I select sort by \"Price Lowest to Highest\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I select \u0027Neighborhoods\u0027 as \"Marina\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I click on \u0027Advanced Option\u0027 in search window",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I select minimum bathrooms as two",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "result page should display least expensive apartment in order which has at least two bathrooms",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I go to last item from result set",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I verify it has two bathrooms",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "http://dubai.dubizzle.com/",
      "offset": 9
    }
  ],
  "location": "AppTest.I_go_to(String)"
});
formatter.result({
  "duration": 4755122000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Apartment_Flat_for_Rent_link()"
});
formatter.result({
  "duration": 1286956000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price Lowest to Highest",
      "offset": 18
    }
  ],
  "location": "AppTest.I_select_sort_by_Price_Lowest_to_Highest(String)"
});
formatter.result({
  "duration": 39440562000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marina",
      "offset": 29
    }
  ],
  "location": "AppTest.I_select_Neighborhoods_as(String)"
});
formatter.result({
  "duration": 10543818000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Advanced_Option_in_search_window()"
});
formatter.result({
  "duration": 3362002000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_select_minimum_bathrooms_as_two()"
});
formatter.result({
  "duration": 3167115000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Search_button()"
});
formatter.result({
  "duration": 7047290000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.result_page_should_display_least_expensive_apartment_in_order_which_has_at_least_two_bathrooms()"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_go_to_last_item_from_result_set()"
});
formatter.result({
  "duration": 2866708000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_verify_it_has_two_bathrooms()"
});
formatter.result({
  "duration": 6511328000,
  "status": "passed"
});
formatter.after({
  "duration": 2626219000,
  "status": "passed"
});
formatter.before({
  "duration": 8458708000,
  "status": "passed"
});
formatter.scenario({
  "id": "\"as-a-user-i-want-the-list-of-least-expensive-apartment-to-rent-in-marina-which-have-at-least-two-bathrooms\";get-list-of-least-expensive-apartment-in-marina;;3",
  "tags": [
    {
      "name": "@RegressionTests",
      "line": 4
    },
    {
      "name": "@SmokeTests",
      "line": 4
    }
  ],
  "description": "",
  "name": "Get list of least expensive apartment in marina",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"http://dubai.dubizzle.com/\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I click on \u0027Apartment/Flat for Rent\u0027 link",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I select sort by \"Oldest to Newest\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I select \u0027Neighborhoods\u0027 as \"Dubai hills\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I click on \u0027Advanced Option\u0027 in search window",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I select minimum bathrooms as two",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "result page should display least expensive apartment in order which has at least two bathrooms",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I go to last item from result set",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I verify it has two bathrooms",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "http://dubai.dubizzle.com/",
      "offset": 9
    }
  ],
  "location": "AppTest.I_go_to(String)"
});
formatter.result({
  "duration": 3418101000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Apartment_Flat_for_Rent_link()"
});
formatter.result({
  "duration": 1269787000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oldest to Newest",
      "offset": 18
    }
  ],
  "location": "AppTest.I_select_sort_by_Price_Lowest_to_Highest(String)"
});
formatter.result({
  "duration": 39767567000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dubai hills",
      "offset": 29
    }
  ],
  "location": "AppTest.I_select_Neighborhoods_as(String)"
});
formatter.result({
  "duration": 11492575000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Advanced_Option_in_search_window()"
});
formatter.result({
  "duration": 3158033000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_select_minimum_bathrooms_as_two()"
});
formatter.result({
  "duration": 3420726000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Search_button()"
});
formatter.result({
  "duration": 7532049000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.result_page_should_display_least_expensive_apartment_in_order_which_has_at_least_two_bathrooms()"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_go_to_last_item_from_result_set()"
});
formatter.result({
  "duration": 1775187000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_verify_it_has_two_bathrooms()"
});
formatter.result({
  "duration": 6589944000,
  "status": "passed"
});
formatter.after({
  "duration": 3339617000,
  "status": "passed"
});
});