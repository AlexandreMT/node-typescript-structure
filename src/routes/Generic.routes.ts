import { Router } from 'express'
import GenericController from '@controllers/Generic.controller'

const GenericRoutes = Router()

GenericRoutes.get('/', GenericController.genericFunction)

export default GenericRoutes
