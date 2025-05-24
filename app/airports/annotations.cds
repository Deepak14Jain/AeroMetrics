using AeroMetricsService as service from '../../srv/service';
using from '@sap/cds/common';

annotate service.Airports with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : '{i18n>IcaoCode}',
                Value : icaoCode,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>IataCode}',
                Value : iataCode,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Airport}',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>City}',
                Value : city,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>State}',
                Value : state,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Country}',
                Value : country_code,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Elevation}',
                Value : elevation,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Latitude}',
                Value : latitude,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Longitude}',
                Value : longitude,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Timezone}',
                Value : timezone_code,
            }
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : {
    $value : [
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Airport}',
            Value : name,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>IcaoCode}',
            Value : icaoCode,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>IataCode}',
            Value : iataCode,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>City}',
            Value : city,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : region,
            Label : '{i18n>Region}',
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : timezone_code,
            Label : '{i18n>Timezone}',
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : elevation,
            Label : '{i18n>Elevation}',
        },
        {
            $Type : 'UI.DataField',
            Value : coordinates,
            Label : '{i18n>Coordinates}',
        },
        {
            $Type : 'UI.DataField',
            Value : criticality,
            Label : 'criticality',
            ![@UI.Importance] : #Low,
        },
        {
            $Type : 'UI.DataField',
            Value : country_code,
            Label : '{i18n>Country}',
        },
        {
            $Type : 'UI.DataField',
            Value : latitude,
            Label : '{i18n>Latitude}',
        },
        {
            $Type : 'UI.DataField',
            Value : longitude,
            Label : '{i18n>Longitude}',
        },
        {
            $Type : 'UI.DataField',
            Value : state,
            Label : '{i18n>State}',
        },
    ],
    ![@UI.Criticality] : criticality
    },
    UI.HeaderInfo : {
        Title : {
            $Type : 'UI.DataField',
            Value : name,
        },
        TypeName : '{i18n>Aerometrics}',
        TypeNamePlural : '',
        Description : {
            $Type : 'UI.DataField',
            Value : region,
        },
        Initials : name,
        TypeImageUrl : 'sap-icon://flight',
    },
    UI.SelectionFields : [
        elevation,
        name,
        iataCode,
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : '{i18n>AllCountries}',
    },
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : icaoCode,
        },
        {
            $Type : 'UI.DataField',
            Value : iataCode,
        },
        {
            $Type : 'UI.DataField',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Value : region,
        },
        {
            $Type : 'UI.DataField',
            Value : coordinates,
        },
        {
            $Type : 'UI.DataField',
            Value : timezone_code,
            ![@UI.Importance] : #Low,
        },
    ],
);

annotate service.Airports with {
    timezone @(
        Common.Text : {
            $value : timezone_code,
            ![@UI.TextArrangement] : #TextOnly
        },
        Common.Label : '{i18n>Timezone}',
        Common.FieldControl : #Mandatory,
        Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Timezones',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : timezone_code,
                    ValueListProperty : 'code',
                },
            ],
            Label : '{i18n>Timezone}',
        },
        Common.ValueListWithFixedValues : true,
    )
};

annotate service.Airports with {
    iataCode @(
        Common.FieldControl : #Optional,
        Common.Label : '{i18n>IataCode}',
    )
};

annotate service.Airports with {
    name @(
        Common.FieldControl : #Mandatory,
        Common.Label : '{i18n>Airport}',
        Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Airports',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : name,
                    ValueListProperty : 'name',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'region',
                },
            ],
            Label : '{i18n>Airport}',
        },
        Common.ValueListWithFixedValues : false,
        )
};

annotate service.Airports with {
    city @(
        Common.FieldControl : #Optional,
        Common.Label : '{i18n>City}',
    )
};

annotate service.Airports with {
    region @(
        Common.FieldControl : #ReadOnly,
        Common.Label : '{i18n>Region}',
    )
};

annotate service.Airports with {
    elevation @(
        Common.FieldControl : #Mandatory,
        Common.Label : '{i18n>Elevation}',
        Measures.Unit : 'feet',
    )
};

annotate service.Airports with {
    coordinates @(
        Common.FieldControl : #ReadOnly,
        Common.Label : '{i18n>Coordinates}',
    )
};

annotate service.Airports with {
    country @(
        Common.Text : country.name,
        Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Countries',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : country_code,
                    ValueListProperty : 'code',
                },
            ],
            Label : '{i18n>Country}',
        },
        Common.ValueListWithFixedValues : true,
        Common.FieldControl : #Mandatory,
    )
};

annotate service.Airports with {
    latitude @(
        Common.FieldControl : #Optional,
        Common.Label : '{i18n>Latitude}',
    )
};

annotate service.Airports with {
    longitude @(
        Common.FieldControl : #Optional,
        Common.Label : '{i18n>Longitude}',
    )
};

annotate service.Airports with {
    state @(
        Common.FieldControl : #Mandatory,
        Common.Label : '{i18n>State}',
    )
};

annotate service.Airports with {
    icaoCode @(Common.Label : '{i18n>IcaoCode}',)
};

annotate service.Airports with {
    criticality @(UI.AdaptationHidden, UI.HiddenFilter, UI.Hidden)
};

annotate service.Airports with {
    avgElevation @(
        Common.FieldControl : #ReadOnly,
        Measures.Unit : 'feet',
        Common.Label : 'avgElevation',
    )
};

annotate service.AvgElevationPerCountry with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : country.name,
            Label : '{i18n>Country}',
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : avgElevation,
            Label : '{i18n>AverageElevation}',
            ![@UI.Importance] : #High,
        },
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
            SortOrder : [
                {
                    $Type : 'Common.SortOrderType',
                    Property : avgElevation,
                    Descending : true,
                },
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Average Elevations',
    },
);

annotate service.AvgElevationPerCountry with {
    country @(
        Common.Text : country.name,
        Common.FieldControl : #ReadOnly,
    )
};

annotate service.AvgElevationPerCountry with {
    avgElevation @(
        Measures.Unit : 'feet',
        Common.FieldControl : #ReadOnly,
        UI.AdaptationHidden,
        UI.HiddenFilter,
    )
};

annotate service.TimeZoneAirportCount with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : timezone_code,
            Label : '{i18n>Timezone}',
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : airportCount,
            Label : 'Number of Airports',
            ![@UI.Importance] : #High,
        },
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
            SortOrder : [
                {
                    $Type : 'Common.SortOrderType',
                    Property : airportCount,
                    Descending : true,
                },
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : '{i18n>MostCommonTimezones}',
    },
);

annotate service.TimeZoneAirportCount with {
    timezone @(
        Common.Text : {
            $value : timezone_code,
            ![@UI.TextArrangement] : #TextOnly
        },
        Common.FieldControl : #ReadOnly,
    )
};

annotate service.TimeZoneAirportCount with {
    airportCount @(
        Common.FieldControl : #ReadOnly,
        UI.AdaptationHidden,
        UI.HiddenFilter,
    )
};

annotate service.Airports with {
    airportCount @Common.Label : 'airportCount'
};