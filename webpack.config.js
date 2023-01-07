const path = require('path');

module.exports = {
  // ... other configuration options

  resolve: {},

  module: {
    rules: [
      {
        test: /\.(txt)$/i,
        use: 'raw-loader',
      },
    ],
  },
};
