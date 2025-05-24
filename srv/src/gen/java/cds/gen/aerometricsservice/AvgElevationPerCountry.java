package cds.gen.aerometricsservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.String;
import java.math.BigDecimal;
import java.util.Map;
import javax.annotation.processing.Generated;

@CdsName("AeroMetricsService.AvgElevationPerCountry")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface AvgElevationPerCountry extends CdsData {
  String COUNTRY = "country";

  String COUNTRY_CODE = "country_code";

  String AVG_ELEVATION = "avgElevation";

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

  BigDecimal getAvgElevation();

  void setAvgElevation(BigDecimal avgElevation);

  AvgElevationPerCountry_ ref();

  static AvgElevationPerCountry create() {
    return Struct.create(AvgElevationPerCountry.class);
  }
}
