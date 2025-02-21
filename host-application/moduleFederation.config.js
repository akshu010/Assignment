const { dependencies } = require("./package.json");
module.exports = {
  name: "hostapplication",
  filename: "remoteEntry.js",
  remotes: {
    chatpage: "chatpage@http://localhost:3010/remoteEntry.js",
    emailpage: "emailpage@http://localhost:3009/remoteEntry.js",
  },

  exposes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: "react",
      shareScope: "default",
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
