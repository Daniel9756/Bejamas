const faunadb = require('faunadb')
const client = new faunadb.Client({ secret: process.env.FAUNA_DB })
const q = faunadb.query

const getAllProducts = async() => {
  const {data} = await  client.query(q.Map(q.Paginate(q.Documents(q.Collection("products"))),
    q.Lambda("ref", q.Get(q.Var("ref")))
    
    ))
    const products = data.map((product) => {
        product.id = product.ref.id
        delete product.ref
        return product
    })
    return products
}

const getAllArts = async() => {
    const {data} = await  client.query(q.Map(q.Paginate(q.Documents(q.Collection("artwork"))),
      q.Lambda("ref", q.Get(q.Var("ref")))
      
      ))
      const arts = data.map((art) => {
          art.id = art.ref.id
          delete art.ref
          return art
      })
      return arts
  }

module.exports = {
    getAllProducts,
    getAllArts,
}