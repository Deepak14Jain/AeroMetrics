sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("Object Page Journey: Navigate and Validate Object Page");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
            });

            opaTest("Validated View Title is \'All Countries\' with 6 Resources Loaded & Export Button Enabled", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iCheckView("All Countries", 6);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(6);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckExport();
            });

            opaTest("Navigated to ObjectPage & Validate Header", function (Given, When, Then) {                              
                When.onTheAirportsListReportPage.onTable("AllCountries").iPressRow(0);
                Then.onTheAirportsObjectPage.iSeeThisPage();
                Then.onTheAirportsObjectPage.onHeader().iCheckTitle("Lowell Field", "US-Alaska");
            });

            opaTest("Validated General Information Section", function (Given, When, Then) {
                Then.onTheAirportsObjectPage
                    .onForm("General Information")
                    .iCheckField("ICAO Code", "00AK")
                    .and.iCheckField("IATA Code", "")
                    .and.iCheckField("Airport", "Lowell Field")
                    .and.iCheckField("City", "Anchor Point")
                    .and.iCheckField("State", "Alaska")
                    .and.iCheckField("Country", "United States (US)")
                    .and.iCheckField("Elevation", "450.000 feet")
                    .and.iCheckField("Latitude", "59.949200")
                    .and.iCheckField("Longitude", "-151.695999")
                    .and.iCheckField("TimeZone", "America/Anchorage");
            });

            opaTest("Teardown", function (Given, When, Then) { 
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});