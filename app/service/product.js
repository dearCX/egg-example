const Service = require("egg").Service;

class ProductService extends Service{
  async index() {
    return { 
      id: 100,
      name: '西瓜'
    }
  }
}
module.exports = ProductService
