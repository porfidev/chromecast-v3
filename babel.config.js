const presets = [
  ["@babel/env", {
    targets: {
      chrome: "63",
    },
    useBuiltIns: "usage"
  }]
];

module.exports = { presets };
