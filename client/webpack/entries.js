const path = require('path');
const { root } = require('./rootPath');

const vendorsLibraries = [
  'react',
];

const vendor = 'vendors';

const entriesNames = [
  // FFRONTEND SECTIONS ENTRIES //
  'home',
];

const entry = {};

entriesNames.forEach(name => {
  console.log('Building: ', name);
  entry[name] = path.join(root, '/src/pages/', name, '/index.js');
});

entry[vendor] = vendorsLibraries;

module.exports = {
  entry,
  // customNames: entriesNames,
  // all: Object.keys(entries),
  // vendor,
};
