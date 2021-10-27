$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Acitime.feature");
formatter.feature({
  "name": "Testing actitime application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing actitime login functionality for valid user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already haveing application URL",
  "keyword": "Given "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_is_already_haveing_application_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "also having username and password",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.also_having_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Actitime home page will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TestActitimeStepDefinition.actitime_home_page_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Testing actitime login functionality for \u003cuser\u003e \u003cusername\u003e \u003cpassword\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having application URL as \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "also having username as \u003cusername\u003e and password as \u003cpassword\u003e for the application",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the username and password",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "Actitime home page will be displayed with the application title as \u003ctitle\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "url",
        "username",
        "password",
        "title"
      ]
    },
    {
      "cells": [
        "valid",
        "https://demo.actitime.com/",
        "admin",
        "manager",
        "actiTIME - Enter Time-Track"
      ]
    },
    {
      "cells": [
        "invalid",
        "https://demo.actitime.com/",
        "admin12",
        "manager",
        "actiTIME - Login"
      ]
    },
    {
      "cells": [
        "invalid",
        "https://demo.actitime.com/",
        "admin",
        "manager23",
        "actiTIME - Login"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing actitime login functionality for valid admin manager",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having application URL as https://demo.actitime.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_is_already_having_application_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "also having username as admin and password as manager for the application",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.also_having_username_as_and_password_as_for_the_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Actitime home page will be displayed with the application title as actiTIME - Enter Time-Track",
  "keyword": "Then "
});
formatter.match({
  "location": "TestActitimeStepDefinition.actitime_home_page_will_be_displayed_with_the_application_title_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing actitime login functionality for invalid admin12 manager",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having application URL as https://demo.actitime.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_is_already_having_application_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "also having username as admin12 and password as manager for the application",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.also_having_username_as_and_password_as_for_the_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Actitime home page will be displayed with the application title as actiTIME - Login",
  "keyword": "Then "
});
formatter.match({
  "location": "TestActitimeStepDefinition.actitime_home_page_will_be_displayed_with_the_application_title_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing actitime login functionality for invalid admin manager23",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having application URL as https://demo.actitime.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_is_already_having_application_url_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "also having username as admin and password as manager23 for the application",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.also_having_username_as_and_password_as_for_the_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestActitimeStepDefinition.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Actitime home page will be displayed with the application title as actiTIME - Login",
  "keyword": "Then "
});
formatter.match({
  "location": "TestActitimeStepDefinition.actitime_home_page_will_be_displayed_with_the_application_title_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestActitimeStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/GoogleSearch.feature");
formatter.feature({
  "name": "Perform Google Search based on requirement",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search \u0027selenium interview questions\u0027 in Google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User is already in Google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_is_already_in_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types \u0027selenium interview questions\u0027 in search input field and clicks on search button",
  "keyword": "When "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_types_selenium_interview_questions_in_search_input_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets search result page with the title \u0027selenium interview questions - Google Search\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_gets_search_result_page_with_the_title_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search \u003ctextToBeSearched\u003e in Google search page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User is already in Google search page",
  "keyword": "Given "
});
formatter.step({
  "name": "user types \u003ctextToBeSearched\u003e in search input field, clicks on search button",
  "keyword": "When "
});
formatter.step({
  "name": "user reached to search result page with the title \u003cexpectedTitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "textToBeSearched",
        "expectedTitle"
      ]
    },
    {
      "cells": [
        "Selenium 3.0",
        "Selenium 3.0 - Google Search"
      ]
    },
    {
      "cells": [
        "Selenium 4.0",
        "Selenium 4.0 - Google Search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Selenium 3.0 in Google search page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User is already in Google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_is_already_in_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types Selenium 3.0 in search input field, clicks on search button",
  "keyword": "When "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_types_in_search_input_field_clicks_on_search_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reached to search result page with the title Selenium 3.0 - Google Search",
  "keyword": "Then "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_reached_to_search_result_page_with_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Selenium 4.0 in Google search page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User is already in Google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_is_already_in_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types Selenium 4.0 in search input field, clicks on search button",
  "keyword": "When "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_types_in_search_input_field_clicks_on_search_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reached to search result page with the title Selenium 4.0 - Google Search",
  "keyword": "Then "
});
formatter.match({
  "location": "TestGoogleSearch_StepDef.user_reached_to_search_result_page_with_the_title(String)"
});
formatter.result({
  "status": "passed"
});
});