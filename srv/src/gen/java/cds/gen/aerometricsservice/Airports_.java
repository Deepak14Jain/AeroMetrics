package cds.gen.aerometricsservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.Boolean;
import java.lang.Integer;
import java.lang.String;
import java.math.BigDecimal;
import java.util.function.Function;
import javax.annotation.processing.Generated;

@CdsName("AeroMetricsService.Airports")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface Airports_ extends StructuredType<Airports_> {
  String COUNTRY_CODE = "country_code";

  String TIMEZONE_CODE = "timezone_code";

  String IS_ACTIVE_ENTITY = "IsActiveEntity";

  String HAS_ACTIVE_ENTITY = "HasActiveEntity";

  String HAS_DRAFT_ENTITY = "HasDraftEntity";

  String DRAFT_ADMINISTRATIVE_DATA_DRAFT_UUID = "DraftAdministrativeData_DraftUUID";

  String CDS_NAME = "AeroMetricsService.Airports";

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

  @CdsName(IS_ACTIVE_ENTITY)
  ElementRef<Boolean> IsActiveEntity();

  @CdsName(HAS_ACTIVE_ENTITY)
  ElementRef<Boolean> HasActiveEntity();

  @CdsName(HAS_DRAFT_ENTITY)
  ElementRef<Boolean> HasDraftEntity();

  DraftAdministrativeData_ DraftAdministrativeData();

  DraftAdministrativeData_ DraftAdministrativeData(
      Function<DraftAdministrativeData_, CqnPredicate> filter);

  @CdsName(DRAFT_ADMINISTRATIVE_DATA_DRAFT_UUID)
  ElementRef<String> DraftAdministrativeData_DraftUUID();

  Airports_ SiblingEntity();

  Airports_ SiblingEntity(Function<Airports_, CqnPredicate> filter);
}
