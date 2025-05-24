package cds.gen.aerometricsservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Boolean;
import java.lang.Integer;
import java.lang.String;
import java.math.BigDecimal;
import java.util.Map;
import javax.annotation.processing.Generated;

@CdsName("AeroMetricsService.Airports")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface Airports extends CdsData {
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

  String IS_ACTIVE_ENTITY = "IsActiveEntity";

  String HAS_ACTIVE_ENTITY = "HasActiveEntity";

  String HAS_DRAFT_ENTITY = "HasDraftEntity";

  String DRAFT_ADMINISTRATIVE_DATA = "DraftAdministrativeData";

  String DRAFT_ADMINISTRATIVE_DATA_DRAFT_UUID = "DraftAdministrativeData_DraftUUID";

  String SIBLING_ENTITY = "SiblingEntity";

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

  @CdsName(IS_ACTIVE_ENTITY)
  Boolean getIsActiveEntity();

  @CdsName(IS_ACTIVE_ENTITY)
  void setIsActiveEntity(Boolean isActiveEntity);

  @CdsName(HAS_ACTIVE_ENTITY)
  Boolean getHasActiveEntity();

  @CdsName(HAS_ACTIVE_ENTITY)
  void setHasActiveEntity(Boolean hasActiveEntity);

  @CdsName(HAS_DRAFT_ENTITY)
  Boolean getHasDraftEntity();

  @CdsName(HAS_DRAFT_ENTITY)
  void setHasDraftEntity(Boolean hasDraftEntity);

  @CdsName(DRAFT_ADMINISTRATIVE_DATA)
  DraftAdministrativeData getDraftAdministrativeData();

  @CdsName(DRAFT_ADMINISTRATIVE_DATA)
  void setDraftAdministrativeData(Map<String, ?> draftAdministrativeData);

  @CdsName(DRAFT_ADMINISTRATIVE_DATA_DRAFT_UUID)
  String getDraftAdministrativeDataDraftUUID();

  @CdsName(DRAFT_ADMINISTRATIVE_DATA_DRAFT_UUID)
  void setDraftAdministrativeDataDraftUUID(String draftAdministrativeDataDraftUUID);

  @CdsName(SIBLING_ENTITY)
  Airports getSiblingEntity();

  @CdsName(SIBLING_ENTITY)
  void setSiblingEntity(Map<String, ?> siblingEntity);

  Airports_ ref();

  static Airports create() {
    return Struct.create(Airports.class);
  }
}
