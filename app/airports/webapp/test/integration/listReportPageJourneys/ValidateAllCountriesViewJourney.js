sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("List Report Page Journey: Validate 'All Countries' View");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
            });

            opaTest("Validated View Title is \'All Countries\' with 6 Records Loaded & Export Button Enabled", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iCheckView("All Countries", 6);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckRows(6);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckExport();
            });

            opaTest("Validated Table Header for 6 Columns", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumns(6);
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumns({"Airport": { headerVisible: true }});
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumns({"ICAO Code": { headerVisible: true }});
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumns({"IATA Code": { headerVisible: true }});
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumns({"City": { headerVisible: true }});
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumns({"Region": { headerVisible: true }});
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumns({"TimeZone": { headerVisible: true }});
            });

            opaTest("Validated Columns in Table Personalization/Settings", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumnAdaptation();
                When.onTheAirportsListReportPage.onTable("AllCountries").iOpenColumnAdaptation();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckColumnAdaptationDialog();
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("Airport", { selected: true });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("ICAO Code", { selected: true });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("IATA Code", { selected: true });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("City", { selected: true });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("Region", { selected: true });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("TimeZone", { selected: true });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("Coordinates", { selected: false });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("Country", { selected: false });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("Elevation", { selected: false });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("Latitude", { selected: false });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("Longitude", { selected: false });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iCheckAdaptationColumn("State", { selected: false });
                Then.onTheAirportsListReportPage.onTable("AllCountries").iConfirmColumnAdaptation();
            });

            opaTest("Validated Table Date for 6 Rows", function (Given, When, Then) {
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