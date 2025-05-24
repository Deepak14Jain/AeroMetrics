sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("List Report Page Journey: Validate 'Average Elevations' View");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page & Changed View", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
                When.onTheAirportsListReportPage.iGoToView("Average Elevations");
            });

            opaTest("Validated View Title is \'Average Elevations\' with 2 Records Loaded & Export Button Enabled", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iCheckView("Average Elevations", 2);
                Then.onTheAirportsListReportPage.onTable("AverageElevations").iCheckRows(2);
                Then.onTheAirportsListReportPage.onTable("AverageElevations").iCheckExport();
            });

            opaTest("Validated Table Header for 2 Columns", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onTable("AverageElevations").iCheckColumns(2);
                Then.onTheAirportsListReportPage.onTable("AverageElevations").iCheckColumns({"Country": { headerVisible: true }});
                Then.onTheAirportsListReportPage.onTable("AverageElevations").iCheckColumns({"Average Elevation": { headerVisible: true }});
            });

            opaTest("Validated Table Date for 2 Rows", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.onTable("AverageElevations").iCheckRows({
                    "Country": "China"
                }, 1);
                Then.onTheAirportsListReportPage.onTable("AverageElevations").iCheckRows({
                    "Country": "United States"
                }, 1);
            });

            opaTest("Teardown", function (Given, When, Then) { 
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});