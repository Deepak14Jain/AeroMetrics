package cds.gen.aerometricsservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.services.EventContext;
import com.sap.cds.services.EventName;
import java.lang.String;
import javax.annotation.processing.Generated;

@EventName("draftPrepare")
@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
public interface AirportsDraftPrepareContext extends EventContext {
  String SIDE_EFFECTS_QUALIFIER = "SideEffectsQualifier";

  String CDS_NAME = "draftPrepare";

  @CdsName(SIDE_EFFECTS_QUALIFIER)
  String getSideEffectsQualifier();

  @CdsName(SIDE_EFFECTS_QUALIFIER)
  void setSideEffectsQualifier(String sideEffectsQualifier);

  CqnSelect getCqn();

  void setCqn(CqnSelect select);

  static AirportsDraftPrepareContext create() {
    return EventContext.create(AirportsDraftPrepareContext.class, "AeroMetricsService.Airports");
  }

  void setResult(Airports result);

  Airports getResult();

  static AirportsDraftPrepareContext create(String entityName) {
    return EventContext.create(AirportsDraftPrepareContext.class, entityName);
  }
}
