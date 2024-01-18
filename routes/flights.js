import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET http://localhost:3000/movies/new
router.get('/new', flightsCtrl.new)

export {
  router
}
