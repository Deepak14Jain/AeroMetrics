package cds.gen.aerometricsservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.String;
import java.math.BigDecimal;
import java.util.function.Function;
import javax.annotation.processing.Generated;

@CdsName("AeroMetricsService.AvgElevationPerCountry")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface AvgElevationPerCountry_ extends StructuredType<AvgElevationPerCountry_> {
  String COUNTRY_CODE = "country_code";

  String CDS_NAME = "AeroMetricsService.AvgElevationPerCountry";

  Countries_ country();

  Countries_ country(Function<Countries_, CqnPredicate> filter);

  @CdsName(COUNTRY_CODE)
  ElementRef<String> country_code();

  ElementRef<BigDecimal> avgElevation();
}
