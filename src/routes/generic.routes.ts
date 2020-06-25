import { Router } from 'express'
import GenericController from '@controllers/generic.controller'

const GenericRoutes = Router()

GenericRoutes.get('/', GenericController.genericFunction)

export default GenericRoutes
