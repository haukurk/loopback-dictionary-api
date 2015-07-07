module.exports = function(Translation) {
  var isStatic = true;
  Translation.disableRemoteMethod('deleteById', isStatic);
  Translation.disableRemoteMethod('upsert', isStatic);
  Translation.disableRemoteMethod('create', isStatic);
  Translation.disableRemoteMethod('updateAttributes', false);
  Translation.disableRemoteMethod('updateAttribute', isStatic);
  Translation.disableRemoteMethod('updateAll', isStatic);
  Translation.disableRemoteMethod('bulkUpdate', isStatic);
};
