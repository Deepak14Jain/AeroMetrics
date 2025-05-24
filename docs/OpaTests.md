# OPA Tests Documentation
OPA (One Page Acceptance) Tests are used to test SAP Fiori applications by simulating user interactions and verifying the application behavior. These tests are written using the UI5 OPA5 framework and are typically used to validate end-to-end scenarios, including navigation, data binding, and UI interactions.
> **Note**: The tests are based on the [SAP Fiori Elements Test API](https://sapui5.hana.ondemand.com/#/api/sap.fe.test.api).

---
## 📂 Test Structure
The OPA tests for the AeroMetrics project are organized as follows:

Folder Structure:
```
app/airports/webapp/test/integration/
├── MainJourney.js                        # Entry point for OPA tests
├── listReportPageJourneys/               # Tests for the List Report Page
│   ├── ApplyFilterOnAllCountriesViewJourney.js
│   ├── CheckFilterBarJourney.js
│   ├── ValidateAllCountriesViewJourney.js
│   ├── ValidateAverageElevationsViewJourney.js
│   ├── ValidateCreateJourney.js
│   ├── ValidateDeleteJourney.js
│   ├── ValidateMostCommonTimeZonesViewJourney.js
├── objectPageJourneys/                   # Tests for the Object Page
│   ├── NavigateAndValidateObjectPageJourney.js
│   ├── ValidateEditJourney.js
├── pages/                                # Page definitions for OPA tests
│   ├── AirportsList.js
│   ├── AirportsObjectPage.js
```

---
## 🚀 Running OPA Tests
**Step 1: Build Environment**
First and foremost, prepare the test server: `npm run prepare-server`

**Step 2: Start the Test Server**
Before running OPA tests, start the test server: `npm run test-server`

**Step 3: Run the OPA Tests**
Execute the OPA tests using the following command: `npm run opa-tests`

---
## 📋 Key Test Scenarios

#### 1. List Report Page Journeys
These tests validate the functionality of the `List Report Page`.

Example: `ValidateCreateJourney.js`
Scenario: Validate the creation of a new airport record.
Steps:
- Start the application.
- Navigate to the List Report Page.
- Click the "Create" button.
- Fill in the form fields and save the record.
- Validate negative scenarios.
- Verify that the new record is displayed in the table.

**Code Snippet:**
```
opaTest("Validated New Record", function (Given, When, Then) {
    Then.onTheAirportsObjectPage.onHeader().iCheckTitle("Dachuan Airport", "CN-Sichuan");
    Then.onTheAirportsObjectPage
        .onForm("General Information")
        .iCheckField("ICAO Code", "ZUDX")
        .and.iCheckField("IATA Code", "DAX")
        .and.iCheckField("Airport", "Dachuan Airport")
        .and.iCheckField("City", "Dazhou")
        .and.iCheckField("State", "Sichuan")
        .and.iCheckField("Country", "China (CN)")
        .and.iCheckField("Elevation", "0.000 feet")
        .and.iCheckField("Latitude", "31.130200")
        .and.iCheckField("Longitude", "107.429500")
        .and.iCheckField("TimeZone", "Asia/Shanghai");
});
```

#### 2. Object Page Journeys
These tests validate the functionality of the `Object Page`.

Example: `ValidateEditJourney.js`
Scenario: Validate editing an airport record.
Steps:
- Start the application.
- Navigate to the Object Page.
- Edit the record and discard the changes.

**Code Snippet:**
```
opaTest("Validated Edit Scenario", function (Given, When, Then) {
    When.onTheAirportsObjectPage.onForm("General Information").iChangeField("City", "New City");
    Then.onTheAirportsObjectPage
        .onForm("General Information")
        .iCheckField("City", "New City");
});
```

#### 3. Filter and Search
These tests validate the `filtering and search` functionality on the List Report Page.

Example: `ApplyFilterOnAllCountriesViewJourney.js`
Scenario: Apply filters to the table and verify the results.
Steps:
- Start the application.
- Navigate to the List Report Page.
- Apply filters (e.g., Elevation > 8000).
- Verify that the table displays the filtered results.

**Code Snippet:**
```
opaTest("Filtered table by setting 'Elevation: >8000' on Filter Bar", function (Given, When, Then) {
    When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("Elevation", ">8000", true)
        .and.iExecuteSearch();
    Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(2);
});
```

---
## 🧩 Page Definitions
OPA tests use Page Objects to define reusable actions and assertions for different parts of the application.

Example: `AirportsList.js`
Defines actions and assertions for the List Report Page.

**Code Snippet:**
```
sap.ui.define([
    'sap/ui/test/Opa5',
    'sap/fe/test/ListReport'
], function (Opa5, ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {
            isHighlighted: function (icaoCode, type) {
                this.waitFor({
                    controlType: "sap.m.ColumnListItem",
                    matchers: [
                        new Properties({ highlight: type }),
                        new BindingPath({
                            path: "/Airports(icaoCode='" + icaoCode + "',IsActiveEntity=true)",
                            propertyPath: "icaoCode"
                        })
                    ],
                    success: function () {
                        Opa5.assert.ok(true, "Record with ICAO Code: '" + icaoCode + "' Highlighted: " + type);
                    },
                    errorMessage: "Record with ICAO Code: '" + icaoCode + "' not Highlighted: " + type
                });
            }
        }
    };

    return new ListReport(
        {
            appId: 'com.aerometrics.app.airports',
            componentId: 'AirportsList',
            entitySet: 'Airports'
        },
        CustomPageDefinitions
    );
});
```

