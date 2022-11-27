const express = require('express')
const router = express.Router()
const redis = require('../redis')
const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits,
  })
})

/* GET created todos count. */
router.get('/statistics', async (req, res) => {
  const numOfTodos = (await redis.getAsync('num_of_todos')) ?? 0
  res.send({
    added_todos: parseInt(numOfTodos),
  })
})

module.exports = router
