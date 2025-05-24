using { com.aerometrics.db.schema as db } from '../db/schema';

service AeroMetricsService {
    entity TimeZoneAirportCount as select from db.Airport {
        key timezone,
        count(icaoCode) as airportCount : Integer // Derived field
    } group by timezone.code;
    // order by airportCount desc
    // limit 10;
    entity AvgElevationPerCountry as select from db.Airport {
        key country,
        round(avg(elevation), 2) as avgElevation : Decimal(10,2), // Derived field
    } group by country.name;
    entity Airports as projection on db.Airport {
        *,
        '[' || latitude || ', ' || longitude || ']' as coordinates : String,  // Derived field
        country.code || '-' || state as region : String, // Derived field
        case 
            when elevation > 8000 then 1 // Set to 1 when elevation > 8000
            // when iataCode IS null then 2 // Set to 2 when iataCode is empty
            else 0 // Default value
        end as criticality : Integer // Derived field
    };
    
    annotate Airports with @odata.draft.enabled; 
}   