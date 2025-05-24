package cds.gen.com.aerometrics.db.schema;

import cds.gen.sap.common.Countries;
import cds.gen.sap.common.Timezones;
import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Integer;
import java.lang.String;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.processing.Generated;

@CdsName("com.aerometrics.db.schema.Airport")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface Airport extends CdsData {
  String ICAO_CODE = "icaoCode";

  String IATA_CODE = "iataCode";

  String NAME = "name";

  String CITY = "city";

  String STATE = "state";

  String COUNTRY = "country";

  String COUNTRY_CODE = "country_code";

  String ELEVATION = "elevation";

  String AVG_ELEVATION = "avgElevation";

  String LATITUDE = "latitude";

  String LONGITUDE = "longitude";

  String COORDINATES = "coordinates";

  String TIMEZONE = "timezone";

  String TIMEZONE_CODE = "timezone_code";

  String REGION = "region";

  String CRITICALITY = "criticality";

  String AIRPORT_COUNT = "airportCount";

  String getIcaoCode();

  void setIcaoCode(String icaoCode);

  String getIataCode();

  void setIataCode(String iataCode);

  String getName();

  void setName(String name);

  String getCity();

  void setCity(String city);

  String getState();

  void setState(String state);

  /**
   * Type for an association to Countries
   *
   * See https://cap.cloud.sap/docs/cds/common#type-country
   */
  Countries getCountry();

  /**
   * Type for an association to Countries
   *
   * See https://cap.cloud.sap/docs/cds/common#type-country
   */
  void setCountry(Map<String, ?> country);

  @CdsName(COUNTRY_CODE)
  String getCountryCode();

  @CdsName(COUNTRY_CODE)
  void setCountryCode(String countryCode);

  Integer getElevation();

  void setElevation(Integer elevation);

  BigDecimal getAvgElevation();

  void setAvgElevation(BigDecimal avgElevation);

  BigDecimal getLatitude();

  void setLatitude(BigDecimal latitude);

  BigDecimal getLongitude();

  void setLongitude(BigDecimal longitude);

  String getCoordinates();

  void setCoordinates(String coordinates);

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

  String getRegion();

  void setRegion(String region);

  Integer getCriticality();

  void setCriticality(Integer criticality);

  Integer getAirportCount();

  void setAirportCount(Integer airportCount);

  Airport_ ref();

  static Airport create() {
    return Struct.create(Airport.class);
  }

  static Airport create(String icaoCode) {
    Map<String, Object> keys = new HashMap<>();
    keys.put(ICAO_CODE, icaoCode);
    return Struct.access(keys).as(Airport.class);
  }
}
