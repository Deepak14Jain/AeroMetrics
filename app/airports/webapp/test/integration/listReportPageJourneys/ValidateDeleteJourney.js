sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("List Report Page Journey: Validate Delete Journey");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
            });

            opaTest("Validated Scenario by Deleting 6th Row", function (Given, When, Then) {
                When.onTheAirportsListReportPage.onTable("AllCountries").iSelectRows(5);
                When.onTheAirportsListReportPage.onTable("AllCountries").iExecuteDelete();
                When.onTheAirportsListReportPage.onDialog("Delete").iConfirm();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(5);
            });

            opaTest("Validated Table Date of 5 Rows", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.isHighlighted("00AK", "None");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Lowell Field",
                    "ICAO Code": "00AK",
                    "IATA Code": "",
                    "City": "Anchor Point",
                    "Region": "US-Alaska",
                    "TimeZone": "America/Anchorage"
                }, 1);
                Then.onTheAirportsListReportPage.isHighlighted("00AL", "None");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Epps Airpark",
                    "ICAO Code": "00AL",
                    "IATA Code": "",
                    "City": "Harvest",
                    "Region": "US-Alabama",
                    "TimeZone": "America/Chicago"
                }, 1);
                Then.onTheAirportsListReportPage.isHighlighted("00AZ", "None");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Cordes Airport",
                    "ICAO Code": "00AZ",
                    "IATA Code": "",
                    "City": "Cordes",
                    "Region": "US-Arizona",
                    "TimeZone": "America/Phoenix"
                }, 1);
                Then.onTheAirportsListReportPage.isHighlighted("ZUDC", "Error");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Daocheng Yading Airport",
                    "ICAO Code": "ZUDC",
                    "IATA Code": "DCY",
                    "City": "Daocheng County",
                    "Region": "CN-Sichuan",
                    "TimeZone": "Asia/Shanghai"
                }, 1);
                Then.onTheAirportsListReportPage.isHighlighted("ZUDR", "Error");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Rikaze Dingri Airport",
                    "ICAO Code": "ZUDR",
                    "IATA Code": "DDR",
                    "City": "",
                    "Region": "CN-Tibet",
                    "TimeZone": "Asia/Shanghai"
                }, 1);
            });

            opaTest("Teardown", function (Given, When, Then) { 
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});