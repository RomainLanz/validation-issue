declare module "@ioc:Adonis/Core/Validator" {
  interface Rules {
    defaultTo(defaultValue: any): Rule;
  }
}
