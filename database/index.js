const { Pool, Client } = require('pg')
const { config } = require('./psql.config.js')

console.log(config)
const pool = new Pool(
  config
)

var getAllItems = async() => {
  try {
    var query = `select * from menu1`
    var output = await pool.query(query)
    return output.rows

  } catch (error) {
      console.log(error)
  }

}

var getReviews = async(id) => {

  try {
    var query = `select * from reviews1 where itemid = ${id}`

    var output = await pool.query(query)
    return output.rows
  } catch ( error ) {
    console.log('error caught', error)
  }
}

var addReviews = async (id,review, userName) => {

  try {
    var query = `insert into reviews1 (itemId, reviewContent, userName) values($1, $2, $3)`

    var values = [id, review, userName]

    var output = await pool.query(query, values)

    return (output)
  } catch (error) {
      console.log(error)
  }


}

module.exports = {
  getAllItems:getAllItems,
  getReviews: getReviews,
  addReviews: addReviews
}