import Route from "@ioc:Adonis/Core/Route";
import { validator, rules, schema } from "@ioc:Adonis/Core/Validator";

Route.get("/", async () => {
  const data = { username: null };
  const validationSchema = schema.create({
    username: schema.string.nullable([rules.defaultTo("virk")]),
  });

  const payload = await validator.validate({
    schema: validationSchema,
    data,
  });

  return payload;
});
