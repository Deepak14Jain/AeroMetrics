package cds.gen.sap.common;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.String;
import javax.annotation.processing.Generated;

@CdsName("sap.common.Countries.texts")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface CountriesTexts_ extends StructuredType<CountriesTexts_> {
  String CDS_NAME = "sap.common.Countries.texts";

  ElementRef<String> locale();

  ElementRef<String> name();

  ElementRef<String> descr();

  ElementRef<String> code();
}
