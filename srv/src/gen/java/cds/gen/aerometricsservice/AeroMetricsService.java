package cds.gen.aerometricsservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.services.cds.ApplicationService;
import com.sap.cds.services.cds.CqnService;
import com.sap.cds.services.cds.RemoteService;
import com.sap.cds.services.draft.DraftService;
import javax.annotation.processing.Generated;

@Generated(
    value = "cds-maven-plugin",
    date = "2025-05-24T03:34:37.697183Z",
    comments = "com.sap.cds:cds-maven-plugin:3.2.0 / com.sap.cds:cds4j-api:3.2.0"
)
@CdsName(AeroMetricsService_.CDS_NAME)
public interface AeroMetricsService extends CqnService {
  interface Application extends ApplicationService, AeroMetricsService {
  }

  interface Remote extends RemoteService, AeroMetricsService {
  }

  interface Draft extends DraftService, AeroMetricsService {
  }
}
