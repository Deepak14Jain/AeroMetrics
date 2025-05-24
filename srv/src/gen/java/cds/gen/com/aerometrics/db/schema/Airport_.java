package cds.gen.com.aerometrics.db.schema;

import cds.gen.sap.common.Countries_;
import cds.gen.sap.common.Timezones_;
import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.Integer;
import java.lang.String;
import java.math.BigDecimal;
import java.util.function.Function;
import javax.annotation.processing.Generated;

@CdsName("com.aerometrics.db.schema.Airport")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface Airport_ extends StructuredType<Airport_> {
  String COUNTRY_CODE = "country_code";

  String TIMEZONE_CODE = "timezone_code";

  String CDS_NAME = "com.aerometrics.db.schema.Airport";

  ElementRef<String> icaoCode();

  ElementRef<String> iataCode();

  ElementRef<String> name();

  ElementRef<String> city();

  ElementRef<String> state();

  Countries_ country();

  Countries_ country(Function<Countries_, CqnPredicate> filter);

  @CdsName(COUNTRY_CODE)
  ElementRef<String> country_code();

  ElementRef<Integer> elevation();

  ElementRef<BigDecimal> avgElevation();

  ElementRef<BigDecimal> latitude();

  ElementRef<BigDecimal> longitude();

  ElementRef<String> coordinates();

  Timezones_ timezone();

  Timezones_ timezone(Function<Timezones_, CqnPredicate> filter);

  @CdsName(TIMEZONE_CODE)
  ElementRef<String> timezone_code();

  ElementRef<String> region();

  ElementRef<Integer> criticality();

  ElementRef<Integer> airportCount();
}
