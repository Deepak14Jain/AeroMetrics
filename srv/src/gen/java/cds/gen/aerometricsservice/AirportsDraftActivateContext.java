package cds.gen.aerometricsservice;

import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.services.EventContext;
import com.sap.cds.services.EventName;
import java.lang.String;
import javax.annotation.processing.Generated;

@EventName("draftActivate")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface AirportsDraftActivateContext extends EventContext {
  String CDS_NAME = "draftActivate";

  CqnSelect getCqn();

  void setCqn(CqnSelect select);

  static AirportsDraftActivateContext create() {
    return EventContext.create(AirportsDraftActivateContext.class, "AeroMetricsService.Airports");
  }

  void setResult(Airports result);

  Airports getResult();

  static AirportsDraftActivateContext create(String entityName) {
    return EventContext.create(AirportsDraftActivateContext.class, entityName);
  }
}
