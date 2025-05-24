
DROP VIEW IF EXISTS localized_AeroMetricsService_Countries;
DROP VIEW IF EXISTS localized_AeroMetricsService_Timezones;
DROP VIEW IF EXISTS AeroMetricsService_DraftAdministrativeData;
DROP VIEW IF EXISTS localized_sap_common_Timezones;
DROP VIEW IF EXISTS localized_sap_common_Countries;
DROP VIEW IF EXISTS AeroMetricsService_Countries_texts;
DROP VIEW IF EXISTS AeroMetricsService_Timezones_texts;
DROP VIEW IF EXISTS AeroMetricsService_Countries;
DROP VIEW IF EXISTS AeroMetricsService_Timezones;
DROP VIEW IF EXISTS AeroMetricsService_Airports;
DROP VIEW IF EXISTS AeroMetricsService_AvgElevationPerCountry;
DROP VIEW IF EXISTS AeroMetricsService_TimeZoneAirportCount;
DROP TABLE IF EXISTS AeroMetricsService_Airports_drafts;
DROP TABLE IF EXISTS DRAFT_DraftAdministrativeData;
DROP TABLE IF EXISTS sap_common_Timezones_texts;
DROP TABLE IF EXISTS sap_common_Countries_texts;
DROP TABLE IF EXISTS sap_common_Timezones;
DROP TABLE IF EXISTS sap_common_Countries;
DROP TABLE IF EXISTS com_aerometrics_db_schema_Airport;

CREATE TABLE com_aerometrics_db_schema_Airport (
  icaoCode NVARCHAR(4) NOT NULL,
  iataCode NVARCHAR(3),
  name NVARCHAR(255),
  city NVARCHAR(255),
  state NVARCHAR(255),
  country_code NVARCHAR(3),
  elevation INTEGER,
  avgElevation DECIMAL(10, 2),
  latitude DECIMAL(9, 6),
  longitude DECIMAL(9, 6),
  timezone_code NVARCHAR(100),
  PRIMARY KEY(icaoCode)
); 

CREATE TABLE sap_common_Countries (
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  code NVARCHAR(3) NOT NULL,
  PRIMARY KEY(code)
); 

CREATE TABLE sap_common_Timezones (
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  code NVARCHAR(100) NOT NULL,
  PRIMARY KEY(code)
); 

CREATE TABLE sap_common_Countries_texts (
  locale NVARCHAR(14) NOT NULL,
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  code NVARCHAR(3) NOT NULL,
  PRIMARY KEY(locale, code)
); 

CREATE TABLE sap_common_Timezones_texts (
  locale NVARCHAR(14) NOT NULL,
  name NVARCHAR(255),
  descr NVARCHAR(1000),
  code NVARCHAR(100) NOT NULL,
  PRIMARY KEY(locale, code)
); 

CREATE TABLE DRAFT_DraftAdministrativeData (
  DraftUUID NVARCHAR(36) NOT NULL,
  CreationDateTime TIMESTAMP(7),
  CreatedByUser NVARCHAR(256),
  DraftIsCreatedByMe BOOLEAN,
  LastChangeDateTime TIMESTAMP(7),
  LastChangedByUser NVARCHAR(256),
  InProcessByUser NVARCHAR(256),
  DraftIsProcessedByMe BOOLEAN,
  PRIMARY KEY(DraftUUID)
); 

CREATE TABLE AeroMetricsService_Airports_drafts (
  icaoCode NVARCHAR(4) NOT NULL,
  iataCode NVARCHAR(3) NULL,
  name NVARCHAR(255) NULL,
  city NVARCHAR(255) NULL,
  state NVARCHAR(255) NULL,
  country_code NVARCHAR(3) NULL,
  elevation INTEGER NULL,
  avgElevation DECIMAL(10, 2) NULL,
  latitude DECIMAL(9, 6) NULL,
  longitude DECIMAL(9, 6) NULL,
  coordinates NVARCHAR(255) NULL,
  timezone_code NVARCHAR(100) NULL,
  region NVARCHAR(255) NULL,
  criticality INTEGER NULL,
  IsActiveEntity BOOLEAN,
  HasActiveEntity BOOLEAN,
  HasDraftEntity BOOLEAN,
  DraftAdministrativeData_DraftUUID NVARCHAR(36) NOT NULL,
  PRIMARY KEY(icaoCode)
); 

CREATE VIEW AeroMetricsService_TimeZoneAirportCount AS SELECT
  Airport_0.timezone_code,
  count(Airport_0.icaoCode) AS airportCount
FROM com_aerometrics_db_schema_Airport AS Airport_0
GROUP BY Airport_0.timezone_code; 

CREATE VIEW AeroMetricsService_AvgElevationPerCountry AS SELECT
  Airport_0.country_code,
  round(avg(Airport_0.elevation), 2) AS avgElevation
FROM (com_aerometrics_db_schema_Airport AS Airport_0 LEFT JOIN sap_common_Countries AS country_1 ON Airport_0.country_code = country_1.code)
GROUP BY country_1.name; 

CREATE VIEW AeroMetricsService_Airports AS SELECT
  Airport_0.icaoCode,
  Airport_0.iataCode,
  Airport_0.name,
  Airport_0.city,
  Airport_0.state,
  Airport_0.country_code,
  Airport_0.elevation,
  Airport_0.avgElevation,
  Airport_0.latitude,
  Airport_0.longitude,
  '[' || Airport_0.latitude || ', ' || Airport_0.longitude || ']' AS coordinates,
  Airport_0.timezone_code,
  Airport_0.country_code || '-' || Airport_0.state AS region,
  CASE WHEN Airport_0.elevation > 8000 THEN 1 ELSE 0 END AS criticality
FROM com_aerometrics_db_schema_Airport AS Airport_0; 

CREATE VIEW AeroMetricsService_Timezones AS SELECT
  Timezones_0.name,
  Timezones_0.descr,
  Timezones_0.code
FROM sap_common_Timezones AS Timezones_0; 

CREATE VIEW AeroMetricsService_Countries AS SELECT
  Countries_0.name,
  Countries_0.descr,
  Countries_0.code
FROM sap_common_Countries AS Countries_0; 

CREATE VIEW AeroMetricsService_Timezones_texts AS SELECT
  texts_0.locale,
  texts_0.name,
  texts_0.descr,
  texts_0.code
FROM sap_common_Timezones_texts AS texts_0; 

CREATE VIEW AeroMetricsService_Countries_texts AS SELECT
  texts_0.locale,
  texts_0.name,
  texts_0.descr,
  texts_0.code
FROM sap_common_Countries_texts AS texts_0; 

CREATE VIEW localized_sap_common_Countries AS SELECT
  coalesce(localized_1.name, L_0.name) AS name,
  coalesce(localized_1.descr, L_0.descr) AS descr,
  L_0.code
FROM (sap_common_Countries AS L_0 LEFT JOIN sap_common_Countries_texts AS localized_1 ON localized_1.code = L_0.code AND localized_1.locale = @locale); 

CREATE VIEW localized_sap_common_Timezones AS SELECT
  coalesce(localized_1.name, L_0.name) AS name,
  coalesce(localized_1.descr, L_0.descr) AS descr,
  L_0.code
FROM (sap_common_Timezones AS L_0 LEFT JOIN sap_common_Timezones_texts AS localized_1 ON localized_1.code = L_0.code AND localized_1.locale = @locale); 

CREATE VIEW AeroMetricsService_DraftAdministrativeData AS SELECT
  DraftAdministrativeData.DraftUUID,
  DraftAdministrativeData.CreationDateTime,
  DraftAdministrativeData.CreatedByUser,
  DraftAdministrativeData.DraftIsCreatedByMe,
  DraftAdministrativeData.LastChangeDateTime,
  DraftAdministrativeData.LastChangedByUser,
  DraftAdministrativeData.InProcessByUser,
  DraftAdministrativeData.DraftIsProcessedByMe
FROM DRAFT_DraftAdministrativeData AS DraftAdministrativeData; 

CREATE VIEW localized_AeroMetricsService_Timezones AS SELECT
  Timezones_0.name,
  Timezones_0.descr,
  Timezones_0.code
FROM localized_sap_common_Timezones AS Timezones_0; 

CREATE VIEW localized_AeroMetricsService_Countries AS SELECT
  Countries_0.name,
  Countries_0.descr,
  Countries_0.code
FROM localized_sap_common_Countries AS Countries_0; 

