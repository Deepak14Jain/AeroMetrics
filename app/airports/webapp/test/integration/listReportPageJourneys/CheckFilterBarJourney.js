sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("List Report Page Journey: Check Filter Bar");

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

            opaTest("Validated the Filter Fields using 'Adapt Filter' Dialog Box", function (Given, When, Then) {
                When.onTheAirportsListReportPage.onFilterBar().iOpenFilterAdaptation();
                Then.onTheAirportsListReportPage.onFilterBar().iCheckAdaptationFilterField("Editing Status", { selected: true })
                    .and.iCheckAdaptationFilterField("Elevation", { selected: true })
                    .and.iCheckAdaptationFilterField("Airport", { selected: true })
                    .and.iCheckAdaptationFilterField("IATA Code", { selected: true })
                    .and.iCheckAdaptationFilterField("ICAO Code", { selected: false })
                    .and.iCheckAdaptationFilterField("City", { selected: false })
                    .and.iCheckAdaptationFilterField("Region", { selected: false })
                    .and.iCheckAdaptationFilterField("TimeZone", { selected: false })
                    .and.iCheckAdaptationFilterField("Coordinates", { selected: false })
                    .and.iCheckAdaptationFilterField("Country", { selected: false })
                    .and.iCheckAdaptationFilterField("Latitude", { selected: false })
                    .and.iCheckAdaptationFilterField("Longitude", { selected: false })
                    .and.iCheckAdaptationFilterField("State", { selected: false })
                    .and.iConfirmFilterAdaptation();
            });

            opaTest("'TimeZone' from adopt filter dialog box added to the filter bar", function (Given, When, Then) {
                When.onTheAirportsListReportPage.onFilterBar().iAddAdaptationFilterField("TimeZone");
                Then.onTheAirportsListReportPage.onFilterBar().iCheckFilterField("TimeZone");
            });
            

            opaTest("Teardown", function (Given, When, Then) { 
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});