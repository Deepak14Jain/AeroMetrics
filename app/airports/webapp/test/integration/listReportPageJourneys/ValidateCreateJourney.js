sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("List Report Page Journey: Validate Create Journey");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
            });

            opaTest("Validated View Title is \'All Countries\' with 5 Records Loaded & Export Button Enabled", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iCheckView("All Countries", 5);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(5);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckExport();
            });

            opaTest("Clicked on Create Action", function (Given, When, Then) {
                When.onTheAirportsListReportPage.onTable("AllCountries").iExecuteCreate();
                When.onTheAirportsListReportPage.onDialog("New Object").iChangeDialogField("ZUDX")
                    .and.iConfirm();
                Then.onTheAirportsObjectPage.onHeader().iCheckTitle("New Object");
            });

            opaTest("Validated Negative Scenario of Empty Fields", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onFooter().iExecuteSave();
                Then.onTheAirportsObjectPage.iSeeErrorMessage("Value of element 'name' in entity 'AeroMetricsService.Airports' is required");
                Then.onTheAirportsObjectPage.iSeeErrorMessage("Value of element 'state' in entity 'AeroMetricsService.Airports' is required");
                Then.onTheAirportsObjectPage.iSeeErrorMessage("Value of element 'country_code' in entity 'AeroMetricsService.Airports' is required");
                Then.onTheAirportsObjectPage.iSeeErrorMessage("Value of element 'elevation' in entity 'AeroMetricsService.Airports' is required");
                Then.onTheAirportsObjectPage.iSeeErrorMessage("Value of element 'timezone_code' in entity 'AeroMetricsService.Airports' is required");
                
            });

            opaTest("Validated Negative Scenario of TimeZone", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("TimeZone", "");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("TimeZone", "Invalid");
                Then.onTheAirportsObjectPage.iSeeFieldInErrorState("timezone_code", "Value \"Invalid\" does not exist.");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("TimeZone", "Asia/Shanghai");
            });

            opaTest("Validated Negative Scenario of IATA Code", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("IATA Code", "DAXY");
                Then.onTheAirportsObjectPage.iSeeFieldInErrorState("iataCode", "Enter a text with a maximum of 3 characters and spaces");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("IATA Code", "DAX");
            });

            opaTest("Validated Negative Scenario of Country", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("Country", "Invalid Country");
                Then.onTheAirportsObjectPage.iSeeFieldInErrorState("country_code", "Value \"Invalid Country\" does not exist.");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("Country", "China");
            });            

            opaTest("Populated Data for 'Airport, City, Latitude, Longitude, State, Elevation'", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("Airport", "Dachuan Airport");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("City", "Dazhou");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("Latitude", "31.130200");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("Longitude", "107.429500");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("State", "Sichuan");
                When.onTheAirportsObjectPage.onForm("General Information").iChangeField("Elevation", "0");
            });

            opaTest("Executed Create Scenario", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onFooter().iExecuteSave();
                Then.onTheAirportsObjectPage.iSeeThisPage();
            });

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

            opaTest("Reloading List Report Page", function (Given, When, Then) { 
                Given.iTearDownMyApp();
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
            });

            opaTest("Validated View Title is \'All Countries\' with 6 Records Loaded", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iCheckView("All Countries", 6);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(6);
            });

            opaTest("Validated Table Date of 6 Rows", function (Given, When, Then) {
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
                Then.onTheAirportsListReportPage.isHighlighted("ZUDX", "None");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Dachuan Airport",
                    "ICAO Code": "ZUDX",
                    "IATA Code": "DAX",
                    "City": "Dazhou",
                    "Region": "CN-Sichuan",
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