Try to build a supermarket management application.

Start the server :
1. Install node.js : https://nodejs.org/
2. Install cnpm : http://npm.taobao.org/
3. Install package : cnpm install
4. Start server : node start.js or node --harmony app.js

Dev mode:
1. Install node-dev : cnpm install -g node-dev
2. Start dev server : node-dev --debug start.js
3. Install browser-sync : cnpm install -g browser-sync
4. Start browser-sync : browser-sync start --proxy "localhost:3000" --files "**" --port "8080"