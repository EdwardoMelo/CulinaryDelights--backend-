# Culinary Delights Hub (Backend)

The Culinary Delights Hub is a web application that allows users to discover and share culinary recipes. With this application, you can explore a wide variety of delicious recipes and also save your favorite recipes for future reference.

### Key Features
Explore Recipes: Browse through a diverse range of recipes available on the platform. You can find recipes for main courses, desserts, snacks, and more.

Save Recipes: Log in to the platform and save your favorite recipes. This way, you can easily access and keep track of the recipes you love.

Share Recipes: If you have a special recipe you want to share with others, you can create and publish your own recipe on the platform. This allows other users to discover and try out your culinary creations.

Registration and Login: To take full advantage of all the features, you can create a personal account. This will enable you to save your favorite recipes and share your own recipes with the community.

## Prerequisites

- Node.js (^v16.17.0)
- MongoDB

## Installation / Usage

1. Clone o repositório:

```bash
git clone https://github.com/EdwardoMelo/BreadcrumbsCulinaryDelights--backend-
.git

npm install

##Inicie o servidor:
npm start
Acesse a API em http://localhost:3000.
```

## Routes
GET /recipes
Returns all recipes.

GET /recipes/savedRecipes/:userID
Returns saved recipes for a specific user.

GET /recipes/savedRecipes/ids/:userID
Returns only the IDs of saved recipes for a specific user.

POST /recipes
Creates a new recipe. Requires authentication with a token.

PUT /recipes
Saves a recipe for a user. Requires authentication with a token.

DELETE /recipes/savedRecipes/:userID
Removes a recipe from a user's saved recipes. Requires authentication with a token.

POST /users/register
Registers a new user.

POST /users/login
Logs in a user.

## Contribution
To contribute to this project, follow the steps below:

Fork the repository.
Create a branch for your contribution:
```bash 
git checkout -b my-contribution.
#Make the desired changes and commit: 
git commit -m "My contribution"
#Push your changes to the remote repository:
git push origin my-contribution
```
### Open a pull request for review.

## Author
Name: Eduardo Silveira Melo

E-mail: eduardo017melo@gmail.com

GitHub: EdwardoMelo
