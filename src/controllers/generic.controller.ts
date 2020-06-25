import { Request, Response } from 'express'
import GenericService from '@services/generic.service'

class GenericController {
  public genericFunction(req: Request, res: Response): Response {
    const genericVar = GenericService.genericFunction()

    return res.json({ message: genericVar })
  }
}

export default new GenericController()
