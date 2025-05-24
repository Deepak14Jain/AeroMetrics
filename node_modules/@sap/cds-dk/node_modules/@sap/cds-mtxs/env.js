const path = require('path')

// Use global cds as it's the local cds installation
// Otherwise it could be a global installation which cause a double load.
// This all happens because sap/cds/.../env/plugin.js calls out to here.
// FIXME: should move this code to package.json as part of a plugin.
const cds = global.cds || require('@sap/cds')

const hana_mt = { kind: 'hana',
  "deploy-format": "hdbtable",
  "vcap": {
    "label": "service-manager"
  }
}

const sqlite_mt = { kind: 'sqlite',
  credentials: { url: 'db.sqlite' },
  schema_evolution:'auto',
}


module.exports = {

  requires: { kinds: {

    "multitenancy": {
      model: [ "@sap/cds-mtxs/srv/bootstrap" ],
      kind: "saas-registry",
      "[subscription-manager]": {
        kind: "subscription-manager",
      },
      t0: "t0"
    },
    "extensibility": {
      model: [ "@sap/cds-mtxs/srv/bootstrap", "@sap/cds-mtxs/db/extensions" ],
      tenantCheckInterval: 10000
    },
    "extensions": {
      model: [ "@sap/cds-mtxs/db/extensions" ],
    },
    "toggles": {
      model: [ "@sap/cds-mtxs/srv/bootstrap" ],
    },

    "cds.xt.ModelProviderService": {
      model: "@sap/cds-mtxs/srv/model-provider"
    },
    "cds.xt.SaasProvisioningService": {
      model: "@sap/cds-mtxs/srv/cf/saas-provisioning-service",
      kind: "saas-registry",
    },
    "cds.xt.SmsProvisioningService": {
      model: "@sap/cds-mtxs/srv/cf/sms-provisioning-service",
      kind: "subscription-manager",
    },
    "cds.xt.DeploymentService": {
      model: "@sap/cds-mtxs/srv/deployment-service",
    },
    "cds.xt.ExtensibilityService": {
      model: "@sap/cds-mtxs/srv/extensibility-service"
    },
    "audit-log": {
      vcap: { label: "auditlog" },
      subscriptionDependency: {
        uaa: 'xsappname'
      }
    },
    "portal": {
      vcap: { label: "portal" },
      subscriptionDependency: {
        uaa: 'xsappname'
      }
    },
    "connectivity": {
      vcap: { label: "connectivity" },
      subscriptionDependency: 'xsappname'
    },
    "destinations": {
      vcap: { label: "destination" },
      subscriptionDependency: 'xsappname'
    },
    "html5-repo": {
      vcap: { label: "html5-apps-repo", plan: "app-runtime"  },
      subscriptionDependency: { uaa: 'xsappname' }
    },

    ////////////////////////////////////////////////////////////////////////
    //
    //  Compatibility
    //

    "cds.xt.ModelProviderService-from-sidecar": { kind: 'rest' },
    "cds.xt.DeploymentService-from-sidecar": { kind: 'rest' },
    "cds.xt.ModelProviderService-in-sidecar": {
      "[development]": { root: "../.." }, // sidecar is expected to reside in ./mtx/sidecar
      "[production]": { root: "_main" },
      "[prod]": { root: "_main" }, // for simulating production in local tests
      _in_sidecar: true,
    },
    "cds.xt.DeploymentService-in-sidecar": {},

  }},

  "[with-mtx-sidecar]": {
    requires: {
      db: {
        '[development]': sqlite_mt,
        '[production]': hana_mt,
      },
      "[java]": {
        "cds.xt.ModelProviderService": { kind: 'rest', model:[] },
        "cds.xt.DeploymentService": { kind: 'rest', model:[] },
      },
      "cds.xt.SaasProvisioningService": false,
      "cds.xt.SmsProvisioningService": false,
      "cds.xt.DeploymentService": false,
      "cds.xt.ExtensibilityService": false,
    }
  },

  "[mtx-sidecar]": {
    i18n: {
      "[development]": { root: path.resolve(cds.root, '../..') }
    },
    requires: {
      db: {
        "[development]": { ...sqlite_mt, credentials: { url: "../../db.sqlite" }},
        "[production]": hana_mt,
      },
      "cds.xt.ModelProviderService": {
        "[development]": { root: "../.." }, // sidecar is expected to reside in ./mtx/sidecar
        "[production]": { root: "_main" },
        "[prod]": { root: "_main" }, // for simulating production in local tests
        _in_sidecar: true,
      },
      "cds.xt.SaasProvisioningService": true,
      "cds.xt.DeploymentService": true,
      "cds.xt.ExtensibilityService": true,
      "[subscription-manager]": {
        "cds.xt.SmsProvisioningService": true,
        "cds.xt.SaasProvisioningService": false,
      }
    },
    "[development]": {
      // requires: { auth: "dummy" }, -> We need authentication for push and pull requests
      server: { port: 4005 }
    }
  },


}
