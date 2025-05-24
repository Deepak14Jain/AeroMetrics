entity cds.xt.Extensions {
  key ID    : UUID;
  tag       : String;
  csn       : LargeString;
  i18n      : LargeString;
  sources   : LargeBinary; // TAR
  activated : String;
  timestamp : Timestamp @cds.on.insert:$now @cds.on.update:$now; // to support invalidation of models
}
