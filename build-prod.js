const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the application
console.log('Building the application...');
execSync('ng build --configuration production', { stdio: 'inherit' });

// Build the SSR application
console.log('Building the SSR application...');
execSync('ng run DigtalCreativty:server', { stdio: 'inherit' });

// Create a package.json for the server
const packageJson = {
  "name": "digtal-creativty-ssr",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node server.mjs"
  },
  "dependencies": {
    "@angular/common": "^19.1.0",
    "@angular/core": "^19.1.0",
    "@angular/platform-server": "^19.1.0",
    "@angular/ssr": "^19.1.2",
    "express": "^4.18.2"
  }
};

// Write the package.json file
fs.writeFileSync(
  path.join(__dirname, 'dist/digtal-creativty/server/package.json'),
  JSON.stringify(packageJson, null, 2)
);

console.log('Production build completed successfully!'); 