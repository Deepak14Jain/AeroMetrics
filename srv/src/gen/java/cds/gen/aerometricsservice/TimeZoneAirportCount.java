package cds.gen.aerometricsservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Integer;
import java.lang.String;
import java.util.Map;
import javax.annotation.processing.Generated;

@CdsName("AeroMetricsService.TimeZoneAirportCount")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface TimeZoneAirportCount extends CdsData {
  String TIMEZONE = "timezone";

  String TIMEZONE_CODE = "timezone_code";

  String AIRPORT_COUNT = "airportCount";

  /**
   * Type for an association to Timezones
   *
   * See https://cap.cloud.sap/docs/cds/common#type-timezone
   */
  Timezones getTimezone();

  /**
   * Type for an association to Timezones
   *
   * See https://cap.cloud.sap/docs/cds/common#type-timezone
   */
  void setTimezone(Map<String, ?> timezone);

  @CdsName(TIMEZONE_CODE)
  String getTimezoneCode();

  @CdsName(TIMEZONE_CODE)
  void setTimezoneCode(String timezoneCode);

  Integer getAirportCount();

  void setAirportCount(Integer airportCount);

  TimeZoneAirportCount_ ref();

  static TimeZoneAirportCount create() {
    return Struct.create(TimeZoneAirportCount.class);
  }
}
