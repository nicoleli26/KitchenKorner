![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/appsmith_logo_primary.png)

This app is built using Appsmith. Turn any datasource into an internal app in minutes. Appsmith lets you drag-and-drop components to build dashboards, write logic with JavaScript objects and connect to any API, database or GraphQL source.

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/images/integrations.png)

### [Github](https://github.com/appsmithorg/appsmith) • [Docs](https://docs.appsmith.com/?utm_source=github&utm_medium=social&utm_content=appsmith_docs&utm_campaign=null&utm_term=appsmith_docs) • [Community](https://community.appsmith.com/) • [Tutorials](https://github.com/appsmithorg/appsmith/tree/update/readme#tutorials) • [Youtube](https://www.youtube.com/appsmith) • [Discord](https://discord.gg/rBTTVJp)

##### You can visit the application using the below link

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](http://localhost:8080/applications/66198ae66aa18321b71a68ef/pages/66198ae66aa18321b71a68f2) [![](https://assets.appsmith.com/git-sync/Buttons2.svg)](http://localhost:8080/applications/66198ae66aa18321b71a68ef/pages/66198ae66aa18321b71a68f2/edit)

## KitchenKorner
The simple all in one social media app for all things cooking! Post your favorite recipes and find the perfect new recipe in the feed. Directly send recipes to your friends and save your favorite new recipes in your personal cookbook. KitchenKorner has everything you need and more! Install today!


### Description 
Welcome to KitchenKorner, your soon-to-be favorite social media platform focused on food! Let’s get started! The first step on our user interface is to create your account on our Make_Account page. Follow the instructions and then you can continue to our home page, which is the feed. The home page might be the most complex page on our interface, with buttons connecting most of our pages. The user has the option to view, save, and share recipes. 


### User Interface
Homepage: Contains the users feed, with access to messages, cookbook, profile, and search.
Create Account: Includes a form to create an account for the app.
Rating & Comments page: Allows users to leave comments and ratings on posts.
Direct Messaging: Users can see and write messages.
Create Posts: Allows users to create a post with a recipe.
Search: Allows users to directly search up other users.
Filters: Allows users to find recipes based on requirements they select in the filter.
Recipe: Shows user a singular recipe they pull up.
Make Post: Allows users to create a new post.
Account: Allows users to look at their own profile.


### Endpoints & Action

#### GET
Return a list of followers for a specific user
Return a list of all recipes
Return the details of the given recipe
Return a list of all ingredients
Return details of ingredient
Return a list of all recipes saved under a users cookbook
Returns all the users tagged in one post 
Returns all comments under a post
Returns the comment of a specific user under a post
Returns all ratings under a post
Returns posts without the specified keywords 
Returns posts with the specified keywords
Return all ingredients in a recipe
Returns direct message from sender
Returns external message from user 
Returns a list of all the posts on a users feed

#### POST
Adding a new user who joins the platform
Adding a new follower to a user
Adding a new ingredient into a recipe
Adding a new recipe to the cookbook
Create a post with a recipe
Specific user adding a comment to a post
Adding a new rating about the actual time to a post
Adding a new rating about the actual difficulty to a post
Create a new filter for keywords to filter out by
Create a new filter to search for posts with recipes including the specified keywords 
Sending a direct message to a user 
Sending external message

#### PUT
Update attributes for this {recipe_id}
Update the price of an ingredient
Update average taste rating of a post
Update average overall rating of actual time on a post
Update average overall rating of actual difficulty on a
Update keywords to filter out of recipes in posts
Update keywords to filter into post recipes
Update the feed with new posts

#### DELETE
Delete user from platform
Follower unfollows the followee
User removing a recipe from their cookbook
Mark a post as archived
Turn off comments under a post
Delete a comment under a post from a specific user
Delete the rating on a pos
Delete/remove the filter 
Delete/remove the filter


#### Authors - SnacAttac
Amelia Willmann - @ameliawillmann
Nicole Li - @nicoleli26
Sahithi Gaddam - @sahithigaddam
Catherina Haast - @caphaast
