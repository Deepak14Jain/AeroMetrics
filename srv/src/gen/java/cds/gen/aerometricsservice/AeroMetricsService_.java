package cds.gen.aerometricsservice;

import com.sap.cds.ql.CdsName;
import java.lang.Class;
import java.lang.String;
import javax.annotation.processing.Generated;

@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
@CdsName("AeroMetricsService")
public interface AeroMetricsService_ {
  String CDS_NAME = "AeroMetricsService";

  Class<Timezones_> TIMEZONES = Timezones_.class;

  Class<TimezonesTexts_> TIMEZONES_TEXTS = TimezonesTexts_.class;

  Class<TimeZoneAirportCount_> TIME_ZONE_AIRPORT_COUNT = TimeZoneAirportCount_.class;

  Class<AvgElevationPerCountry_> AVG_ELEVATION_PER_COUNTRY = AvgElevationPerCountry_.class;

  Class<DraftAdministrativeData_> DRAFT_ADMINISTRATIVE_DATA = DraftAdministrativeData_.class;

  Class<Airports_> AIRPORTS = Airports_.class;

  Class<Countries_> COUNTRIES = Countries_.class;

  Class<CountriesTexts_> COUNTRIES_TEXTS = CountriesTexts_.class;
}
