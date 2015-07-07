var defaultReplacement = function(replacement) {
  return replacement == '' ? '' : replacement || '-';
};

slugify = function(string, replacement) {
  var replacement = defaultReplacement(replacement),
      out = '';

  if (!_.isString(string)) {
    return '';
  }

  _.forEach(string.split(''), function(ch) {

    if (_.has(CHAR_MAP, ch)) {
      ch = CHAR_MAP[ch];
    }

    ch = ch.replace(/[^\w\s$\*\_\+~\.\(\)\-]/g, ''); // allowed
    out += ch;
  });

  out = out.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
  out = out.replace(/[-\s]+/g, replacement); // convert spaces
  out.replace("#{replacement}$", ''); // remove trailing separator
  return out.toLowerCase();
};

if (Meteor.isClient) {
  Template.registerHelper('slugify', function(string, replacement) {
    var replacement = defaultReplacement(replacement);
    return slugify(string, replacement);
  });
}
