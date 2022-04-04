const { execSync } = require('child_process');
const { getAbi } = require('node-abi');

const VERSION_EXPR = /^v(\d+).(\d+).(\d+)/;

const filterVersions = (versions) => {

  return versions.filter
};

// const electronVersions = JSON.parse(execSync(`yarn info electron --json|jq '.data.versions'`).toString('utf8'));
// console.log(electronVersions);

// const nodeVersions = JSON.parse(execSync(`fnm list-remote|jq -R '.'|jq -s`).toString('utf8'));
// console.log(nodeVersions);

console.log(getAbi('v17.3.1'), 'electron');
