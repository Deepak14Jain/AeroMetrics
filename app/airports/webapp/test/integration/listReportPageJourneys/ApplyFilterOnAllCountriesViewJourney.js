sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("List Report Page Journey: Apply Filter on 'All Countries' View");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
            });

            opaTest("Filter Bar is Loaded", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onFilterBar().iCheckState({visible: true});
            });

            opaTest("Validated the Filter Fields on Filter Bar", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onFilterBar().iCheckFilterField("Editing Status")
                    .and.iCheckFilterField("Elevation")
                    .and.iCheckFilterField("Airport")
                    .and.iCheckFilterField("IATA Code");
            });

            opaTest("Filtered table by setting 'Elevation: >8000' on Filter Bar", function (Given, When, Then) {
                When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("Elevation", ">8000", true)
                    .and.iExecuteSearch();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(2);
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
                When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("Elevation", "", true)
                    .and.iExecuteSearch();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(6);
            });

            opaTest("Filtered table by setting 'Airport: *Field*' & 'Airport: *park*' on Filter Bar", function (Given, When, Then) {
                When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("Airport", "*Field*", true)
                    .and.iExecuteSearch();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(1);
                Then.onTheAirportsListReportPage.isHighlighted("00AK", "None");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Lowell Field",
                    "ICAO Code": "00AK",
                    "IATA Code": "",
                    "City": "Anchor Point",
                    "Region": "US-Alaska",
                    "TimeZone": "America/Anchorage"
                }, 1);
                When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("Airport", "*park*", true)
                    .and.iExecuteSearch();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(1);
                Then.onTheAirportsListReportPage.isHighlighted("00AL", "None");
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows({
                    "Airport": "Epps Airpark",
                    "ICAO Code": "00AL",
                    "IATA Code": "",
                    "City": "Harvest",
                    "Region": "US-Alabama",
                    "TimeZone": "America/Chicago"
                }, 1);
                When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("Airport", "", true)
                    .and.iExecuteSearch();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(6);
            });

            opaTest("Filtered table by setting 'IATA Code: <empty>' on Filter Bar", function (Given, When, Then) {
                When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("IATA Code", "<empty>", true)
                    .and.iExecuteSearch();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(3);
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
                When.onTheAirportsListReportPage.onFilterBar().iChangeFilterField("IATA Code", "", true)
                    .and.iExecuteSearch();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(6);
            });

            opaTest("Teardown", function (Given, When, Then) { 
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});