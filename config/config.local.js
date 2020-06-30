/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.mysql = {
    clients: {
      db1: {
        host: '10.74.134.69',
        port: '3306',
        user: 'root',
        password: 'getech@123!@#',
        database: 'DigitalTCL',
      },
      db2: {
        host: '10.74.134.69',
        port: '3306',
        user: 'root',
        password: 'getech@123!@#',
        database: 'data_mg',
      },
    },
    app: true,
    agent: false,
  };

  return {
    ...config,
  };
};
