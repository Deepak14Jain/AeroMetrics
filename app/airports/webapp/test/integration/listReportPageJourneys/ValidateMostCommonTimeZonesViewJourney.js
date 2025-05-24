sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("List Report Page Journey: Validate 'Most Common TimeZones' View");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page & Changed View", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
                When.onTheAirportsListReportPage.iGoToView("Most Common TimeZones");
            });

            opaTest("Validated View Title is \'Most Common TimeZones\' with 4 Records Loaded & Export Button Enabled", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iCheckView("Most Common TimeZones", 4);
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckRows(4);
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckExport();
            });

            opaTest("Validated Table Header for 2 Columns", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckColumns(2);
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckColumns({"TimeZone": { headerVisible: true }});
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckColumns({"Number of Airports": { headerVisible: true }});
            });

            opaTest("Validated Table Date for 4 Rows", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckRows({
                    "TimeZone": "Asia/Shanghai" ,
                    "Number of Airports": "3"
                }, 1);
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckRows({
                    "TimeZone": "America/Anchorage" ,
                    "Number of Airports": "1"
                }, 1);
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckRows({
                    "TimeZone": "America/Chicago" ,
                    "Number of Airports": "1"
                }, 1);
                Then.onTheAirportsListReportPage.onTable("MostCommonTimeZones").iCheckRows({
                    "TimeZone": "America/Phoenix" ,
                    "Number of Airports": "1"
                }, 1);
            });

            opaTest("Teardown", function (Given, When, Then) { 
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});