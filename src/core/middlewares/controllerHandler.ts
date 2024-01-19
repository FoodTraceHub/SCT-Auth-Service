// controllerHandler.ts

import { Request, Response, NextFunction } from "express"
import { IControllerArgs, AnyFunction , IValidatorSchema, IControllerHandler, ExpressCallback} from "../types"
import parseControllerArgs from "../utils/parseControllerArgs"
import { validateSchema } from "../utils/validate"
import StatusCodes from "http-status-codes"

export class ControllerHandler {
  handle = (
    controllerFunction: AnyFunction,
    schema: IValidatorSchema | undefined,
    options: IControllerHandler | undefined,
    ) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (options?.isPrivate) {
          // do something
        }
        const controllerArgs = parseControllerArgs.parse(req)
        const { input, params, query, headers, files, cookies } = controllerArgs
        if (schema) {
          const {input, query, params } = schema

          try {
            if (input) {
            validateSchema(input)
            }
            if (query) {
            validateSchema(query)
            }
            if (params) {
            validateSchema(params)
            }
            } catch (error) {
            next(error)
            }
          }
            const result = await controllerFunction(controllerArgs)

            if(!result) {
              return res.status(StatusCodes.NO_CONTENT).send()
            }

            const { code, header, ...data } = result

            res
              .set({ ...headers })
              .status(code ?? StatusCodes.OK)
              .send(data)
          } catch (error) {
            next(error)
          }
        }
      }

    }