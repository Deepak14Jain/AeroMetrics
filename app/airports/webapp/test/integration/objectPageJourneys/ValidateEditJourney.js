sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("Object Page Journey: Validate Edit Journey");

            opaTest("Application Started", function (Given, When, Then) {
                Given.iStartMyApp();
            });

            opaTest("Loaded List Report Page", function (Given, When, Then) {
                Then.onTheAirportsListReportPage.iSeeThisPage();
            });

            opaTest("Navigated to ObjectPage & Validate Header", function (Given, When, Then) {                              
                When.onTheAirportsListReportPage.onTable("AllCountries").iPressRow(2);
                Then.onTheAirportsObjectPage.iSeeThisPage();
                Then.onTheAirportsObjectPage.onHeader().iCheckTitle("Cordes Airport", "US-Arizona");
            });

            opaTest("Validated Edit Scenario", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onHeader().iExecuteEdit();
                Then.onTheAirportsObjectPage
                    .onForm("General Information")
                    .iCheckField("ICAO Code", "00AZ", {editMode: "Display", required: false})
                    .and.iCheckField("IATA Code", "", {editMode: "Editable", required: false})
                    .and.iCheckField("Airport", "Cordes Airport", {editMode: "Editable", required: true})
                    .and.iCheckField("City", "Cordes", {editMode: "Editable", required: false})
                    .and.iCheckField("State", "Arizona", {editMode: "Editable", required: true})
                    .and.iCheckField("Country", "United States (US)", {editMode: "Editable", required: true})
                    .and.iCheckField("Latitude", "34.305599", {editMode: "Editable", required: false})
                    .and.iCheckField("Longitude", "-112.165001", {editMode: "Editable", required: false})
                    .and.iCheckField("TimeZone", "America/Phoenix", {editMode: "Editable", required: true});
            });

            opaTest("Draft Discarded", function (Given, When, Then) {
                When.onTheAirportsObjectPage.onFooter().iExecuteCancel();
            });

            opaTest("Teardown", function (Given, When, Then) { 
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});