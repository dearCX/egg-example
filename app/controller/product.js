const Controller = require('egg').Controller;

class ProductController extends Controller{
  async index() {
    const { ctx } = this
    console.log('123122121313')
    const res = await ctx.service.product.index()
    ctx.body = res
  }
  async detail() {
    const { ctx } = this
    console.log(ctx.query)
    ctx.body = `商品详情 === ${ctx.query.id}`
  }
  async detail2() {
    const { ctx } = this
    console.log(ctx.params)
    ctx.body = `id === ${ctx.params.id}`
  }
  async add() {
    const { ctx } = this
    const { name, weight} = ctx.request.body
    console.log(ctx.request.body)
    ctx.body = {
      name,
      weight
    }
  }
  async update() {
    const { ctx } = this
    console.log(ctx.params)
    ctx.body = {
      id: ctx.params.id
    }
  }
  async delete() {
    const { ctx } = this
    console.log(ctx.params)
    ctx.body = {
      id: ctx.params.id
    }
  }
}
module.exports = ProductController;
