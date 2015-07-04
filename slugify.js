var defaultReplacement = function(replacement) {
  return replacement == '' ? '' : replacement || '-';
};

slugify = function(string, replacement) {
  var replacement = defaultReplacement(replacement);
  if (!_.isString(string)) {
    return '';
  }

  var result = '';
  for (var i=0; i < string.length; i++) {
    var ch = string[i];
    if (CHAR_MAP[ch]) {
      ch = CHAR_MAP[ch];
    }
    ch = ch.replace(/[^\w\s$\*\_\+~\.\(\)\'\"\-]/g, ''); // allowed
    result += ch;
  }
  result = result.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
  result = result.replace(/[-\s]+/g, replacement); // convert spaces
  result.replace("#{replacement}$", ''); // remove trailing separator
  return result.toLowerCase();
};

if (Meteor.isClient) {
  Template.registerHelper('slugify', function(string, replacement) {
    var replacement = defaultReplacement(replacement);
    return slugify(string, replacement);
  });
}
