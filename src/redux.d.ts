declare namespace Redux {
  //!! Implicit Redux Helpers
  type Type = string;
  type Types = Record<string, Type>;
  type Action<Payload = void> = Payload extends void
    ? { type: Type }
    : { type: Type; payload: Payload };
  type ActionCreator<Payload = void> = Payload extends void
    ? { (): Action }
    : { (payload: Payload): Action<Payload> };

  //!! Explicit Redux Helpers
  type ExactType<Name> = Name extends string ? Name : never;
  type ExactAction<Type, Payload = void> = Payload extends void
    ? { type: ExactType<Type> }
    : { type: ExactType<Type>; payload: Payload };
  type ExactActionCreator<Type, Payload = void> = Payload extends void
    ? { (): ExactAction<Type> }
    : { (payload: Payload): ExactAction<Type, Payload> };
}
