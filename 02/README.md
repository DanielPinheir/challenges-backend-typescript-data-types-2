# Challenge 02

## User Registration and Listing

Implement two functions, one to register a user containing the properties below and another function to list users.

-   name
-   email
-   cpf
-   profession (optional)
-   address (if not filled in, it must be null)

The `address` property will be an object containing the following properties:

-   zip code
-   street
-   add-on (optional)
-   neighborhood
-   city

When registering the user, the information must persist in the `bd.json` file, using the previously implemented file writing function and the function must return the registered user.

The list of users should start from the information contained in the `bd.json` file, using the previously implemented file reading function.

The program must use TypeScript and all variables, parameters and function returns must be properly typed.

It is not necessary to transpile the code.

Test with other examples.

---
###### tags: `backend` `typescript` `exercicio` `nodeJS` `JavaScript`