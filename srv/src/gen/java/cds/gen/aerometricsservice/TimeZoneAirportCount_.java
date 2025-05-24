package cds.gen.aerometricsservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.Integer;
import java.lang.String;
import java.util.function.Function;
import javax.annotation.processing.Generated;

@CdsName("AeroMetricsService.TimeZoneAirportCount")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface TimeZoneAirportCount_ extends StructuredType<TimeZoneAirportCount_> {
  String TIMEZONE_CODE = "timezone_code";

  String CDS_NAME = "AeroMetricsService.TimeZoneAirportCount";

  Timezones_ timezone();

  Timezones_ timezone(Function<Timezones_, CqnPredicate> filter);

  @CdsName(TIMEZONE_CODE)
  ElementRef<String> timezone_code();

  ElementRef<Integer> airportCount();
}
