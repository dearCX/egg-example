'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async find() {
    const { ctx } = this;
    ctx.logger.info('request>>>');
    ctx.body = 'hi, egg connie';
  }
}

module.exports = UserController;
