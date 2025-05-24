namespace com.aerometrics.db.schema;

using { Country, Timezone } from '@sap/cds/common';

entity Airport {
    key icaoCode            : String(4);
    iataCode                : String(3);
    name                    : String;
    city                    : String;
    state                   : String;
    country                 : Country;
    elevation               : Integer;
    avgElevation            : Decimal(10,2); // derived field (avg of all airports in the same country)
    latitude                : Decimal(9,6);
    longitude               : Decimal(9,6);
    virtual coordinates     : String; // derived field (latitude + longitude)
    timezone                : Timezone;
    virtual region          : String; // derived field (country + state)
    virtual criticality     : Integer @assert.range: [0, 5]; // derived field (elevation > 8000)  
    virtual airportCount    : Integer; // derived field (count of airports in a particular timezone)
}