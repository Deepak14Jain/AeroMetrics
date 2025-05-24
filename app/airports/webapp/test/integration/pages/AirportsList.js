sap.ui.define([
    'sap/ui/test/Opa5',
    'sap/fe/test/ListReport',
    'sap/ui/test/matchers/Properties',
    'sap/ui/test/matchers/BindingPath',
],
function(Opa5, ListReport, Properties, BindingPath) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {
            isHighlighted: function (icaoCode, type) {
                this.waitFor({
                    controlType: "sap.m.ColumnListItem",
                    matchers: [
                        new Properties({
                            highlight: type
                        }),
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
            contextPath: '/Airports'
        },
        CustomPageDefinitions
    );
});