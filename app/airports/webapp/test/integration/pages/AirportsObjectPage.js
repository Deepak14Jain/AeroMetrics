sap.ui.define([
    'sap/ui/test/Opa5',
    'sap/fe/test/ObjectPage',
'sap/ui/test/matchers/Properties',
    'sap/ui/test/matchers/BindingPath'
], 
function(Opa5, ObjectPage, Properties, BindingPath) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {
            iSeeErrorMessage: function (message) {
                this.waitFor({
                    controlType: "sap.m.MessageListItem",
                    properties: {
                        title: message
                    },
                    searchOpenDialogs: true,
                    success: function () {
                        Opa5.assert.ok(true, "Error Dialog Visible");
                    },
                    errorMessage: "Error Dialog not Found"
                });
            },
            
            iSeeFieldInErrorState: function (field, message) {
                this.waitFor({
                    id: "com.aerometrics.app.airports::AirportsObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::" + field + "::Field-edit",
                    matchers: new Properties({
                        valueState: "Error",
                        valueStateText: message
                    }),
                    success: function () {
                        Opa5.assert.ok(true, field+ " in Error State");
                    },
                    errorMessage: field + " not in Error State"
                });
            }
        }
    };

    return new ObjectPage(
        {
            appId: 'com.aerometrics.app.airports',
            componentId: 'AirportsObjectPage',
            contextPath: '/Airports'
        },
        CustomPageDefinitions
    );
});