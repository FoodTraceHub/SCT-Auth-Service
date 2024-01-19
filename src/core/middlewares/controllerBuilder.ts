import {
    AnyFunction,
    IValidatorSchema,
    IControllerHandler
  } from "../types"
  import { ControllerHandler } from "./controllerHandler"
  
  export class ControlBuilder {
    private handler!: AnyFunction
    private schema: IValidatorSchema | undefined
    private availableOptions = {
    //   isPrivate: false,
    }
  
    private options: IControllerHandler | undefined = this.availableOptions
  
    static builder() {
      return new ControlBuilder()
    }
  
    setHandler(func: AnyFunction) {
      this.handler = func
      return this
    }
  
    setValidator(schema: IValidatorSchema) {
      this.schema = schema
      return this
    }
  
    handle() {
      return new ControllerHandler().handle(
        this.handler,
        this.schema,
        this.options,
      )
    }
  }