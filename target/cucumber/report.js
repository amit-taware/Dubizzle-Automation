$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FunctionalTests/Testcases/Dubzzile.feature");
formatter.feature({
  "id": "\"as-a-user-i-want-the-list-of-least-expensive-apartment-to-rent-in-marina-which-have-at-least-two-bathrooms\"",
  "description": "",
  "name": "\"As a user I want the list of least expensive apartment to rent in marina which have at least two bathrooms\"",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 34562667000,
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
  "duration": 2530000000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Apartment_Flat_for_Rent_link()"
});
formatter.result({
  "duration": 149440000,
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
  "duration": 6776901000,
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
  "duration": 5236652000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Advanced_Option_in_search_window()"
});
formatter.result({
  "duration": 2093258000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_select_minimum_bathrooms_as_two()"
});
formatter.result({
  "duration": 111982000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_click_on_Search_button()"
});
formatter.result({
  "duration": 50244000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.result_page_should_display_least_expensive_apartment_in_order_which_has_at_least_two_bathrooms()"
});
formatter.result({
  "duration": 116000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_go_to_last_item_from_result_set()"
});
formatter.result({
  "duration": 342472000,
  "status": "passed"
});
formatter.match({
  "location": "AppTest.I_verify_it_has_two_bathrooms()"
});
formatter.result({
  "duration": 9431496000,
  "status": "passed"
});
formatter.after({
  "duration": 187580000,
  "status": "passed"
});
formatter.before({
  "duration": 32245714000,
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
  "duration": 32884369000,
  "status": "failed",
  "error_message": "org.openqa.selenium.TimeoutException: Timed out awaiting response to command \"get\" after 32864 ms (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32.88 seconds\nBuild info: version: \u00272.37.0\u0027, revision: \u0027a7c61cbd68657e133ae96672cf995890bad2ee42\u0027, time: \u00272013-10-18 09:51:02\u0027\nSystem info: host: \u0027pun-tawarea-m\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.5\u0027, java.version: \u00271.7.0_25\u0027\nSession ID: null\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities [{platform\u003dMAC, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, secureSsl\u003dtrue, browserName\u003dsafari, takesScreenshot\u003dtrue, version\u003d7.1}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat FunctionalTests.Pages.HomePage.navigateTo(HomePage.java:48)\n\tat FunctionalTests.Testcases.StepDef.AppTest.I_go_to(AppTest.java:29)\n\tat ✽.When I go to \"http://dubai.dubizzle.com/\"(FunctionalTests/Testcases/Dubzzile.feature:6)\n"
});
formatter.match({
  "location": "AppTest.I_click_on_Apartment_Flat_for_Rent_link()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "AppTest.I_click_on_Advanced_Option_in_search_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppTest.I_select_minimum_bathrooms_as_two()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppTest.I_click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppTest.result_page_should_display_least_expensive_apartment_in_order_which_has_at_least_two_bathrooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppTest.I_go_to_last_item_from_result_set()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AppTest.I_verify_it_has_two_bathrooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 934942000,
  "status": "passed"
});
});