sap.ui.define(
    [
        "sap/fe/test/JourneyRunner",

        // Pages
        "airports/test/integration/pages/AirportsList",
        "airports/test/integration/pages/AirportsObjectPage",

        // List Report Page Journeys
        "airports/test/integration/listReportPageJourneys/ValidateAllCountriesViewJourney",
        "airports/test/integration/listReportPageJourneys/ValidateMostCommonTimeZonesViewJourney",
        "airports/test/integration/listReportPageJourneys/ValidateAverageElevationsViewJourney",
        "airports/test/integration/listReportPageJourneys/CheckFilterBarJourney",
        "airports/test/integration/listReportPageJourneys/ApplyFilterOnAllCountriesViewJourney",
        "airports/test/integration/listReportPageJourneys/ValidateDeleteJourney",
        "airports/test/integration/listReportPageJourneys/ValidateCreateJourney",

        // Object Page Journeys
        "airports/test/integration/objectPageJourneys/NavigateAndValidateObjectPageJourney",
        "airports/test/integration/objectPageJourneys/ValidateEditJourney",

    ],
    function (
        JourneyRunner,

        // Pages
        AirportsListReportPage,
        AirportsObjectPage,

        // List Report Page Journeys
        ValidateAllCountriesViewJourney,
        ValidateMostCommonTimeZonesViewJourney,
        ValidateAverageElevationsViewJourney,
        CheckFilterBarJourney,
        ApplyFilterOnAllCountriesViewJourney,
        ValidateDeleteJourney,
        ValidateCreateJourney,

        // Object Page Journeys
        NavigateAndValidateObjectPageJourney,
        ValidateEditJourney
    ) {
        var RRJourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl("airports/app") + ".html",
            launchParameters: {
                serverDelay: 0,
                responderOn: true,
                demoApp: "airports",
                "sap-ui-language": "en_US"
            }
        });

        RRJourneyRunner.run(
            {
                pages: {
                    onTheAirportsListReportPage: AirportsListReportPage,
                    onTheAirportsObjectPage: AirportsObjectPage
                }
            },
            // List Report Page Journeys
            ValidateAllCountriesViewJourney.run,
            ValidateMostCommonTimeZonesViewJourney.run,
            ValidateAverageElevationsViewJourney.run,
            CheckFilterBarJourney.run,
            ApplyFilterOnAllCountriesViewJourney.run,
            ValidateDeleteJourney.run,
            ValidateCreateJourney.run,

            // Object Page Journeys
            NavigateAndValidateObjectPageJourney.run,
            ValidateEditJourney.run
        );
    }
);

