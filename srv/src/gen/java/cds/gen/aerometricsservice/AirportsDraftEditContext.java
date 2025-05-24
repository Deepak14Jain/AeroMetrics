package cds.gen.aerometricsservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.services.EventContext;
import com.sap.cds.services.EventName;
import java.lang.Boolean;
import java.lang.String;
import javax.annotation.processing.Generated;

@EventName("draftEdit")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface AirportsDraftEditContext extends EventContext {
  String PRESERVE_CHANGES = "PreserveChanges";

  String CDS_NAME = "draftEdit";

  @CdsName(PRESERVE_CHANGES)
  Boolean getPreserveChanges();

  @CdsName(PRESERVE_CHANGES)
  void setPreserveChanges(Boolean preserveChanges);

  CqnSelect getCqn();

  void setCqn(CqnSelect select);

  static AirportsDraftEditContext create() {
    return EventContext.create(AirportsDraftEditContext.class, "AeroMetricsService.Airports");
  }

  void setResult(Airports result);

  Airports getResult();

  static AirportsDraftEditContext create(String entityName) {
    return EventContext.create(AirportsDraftEditContext.class, entityName);
  }
}
