export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  const { age } = await readBody(event);

//const name = 'david'
  return {
    message: `Hello ${name}! You are ${age} years old.`,
  };
});
