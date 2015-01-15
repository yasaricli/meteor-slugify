Package.describe({
  name: 'yasaricli:slugify',
  summary: 'Remove special characters from a string',
  version: '0.0.5',
  git: 'https://github.com/yasaricli/meteor-slugify.git'
});

Package.onUse(function(api, where) {
  var where = where || ['client', 'server'];

  // meteor @version
  api.versionsFrom('1.0.2.1');

  // add file slugify and export
  api.addFiles('slugify.js', where);
  api.export('slugify');
});

Package.onTest(function(api, where) {
  var where = where || ['client', 'server'];

  api.versionsFrom('1.0.2.1');
  api.use('underscore', where);
  api.use('tinytest', where);
  api.use('yasaricli::slugify', where);
  api.addFiles('tests.js', where);
});
