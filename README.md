## Purpose 
This project was created for DIT341, the Web Developement course in the second year of the SEM BSc programme at Gothenburg University. It allows users to create a user account and work with adding/removing cafes, categories and reviews. 

Fika Finder was developed by fika fanatics:  
Fayona Cowperthwaite (guscowfa@student.gu.se)   
Jennifer Nord (gusnorjea@student.gu.se)  
Victoria Vu (gusvuvij@student.gu.se)  

The template that was used for this project can be found here: https://github.com/dit341/group-00-web

# Backend and Frontend Template

Latest version: https://git.ita.chalmers.se/courses/dit341/group-00-web (public Github [mirror](https://github.com/dit341/group-00-web))

## Project Structure

| File        | Purpose           | What you do?  |
| ------------- | ------------- | ----- |
| `server/` | Backend server code | All your server code |
| [server/README.md](server/README.md) | Everything about the server | **READ ME** carefully! |
| `client/` | Frontend client code | All your client code |
| [client/README.md](client/README.md) | Everything about the client | **READ ME** carefully! |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Free online production deployment | Deploy your app online in production mode |
| [docs/LOCAL_DEPLOYMENT.md](docs/LOCAL_DEPLOYMENT.md) | Local production deployment | Deploy your app local in production mode |

## Requirements

The version numbers in brackets indicate the tested versions but feel free to use more recent versions.
You can also use alternative tools if you know how to configure them (e.g., Firefox instead of Chrome).

* [Git](https://git-scm.com/) (v2) => [installation instructions](https://www.atlassian.com/git/tutorials/install-git)
  * [Add your Git username and set your email](https://docs.gitlab.com/ce/gitlab-basics/start-using-git.html#add-your-git-username-and-set-your-email)
    * `git config --global user.name "YOUR_USERNAME"` => check `git config --global user.name`
    * `git config --global user.email "email@example.com"` => check `git config --global user.email`
  * > **Windows users**: We recommend to use the [Git Bash](https://www.atlassian.com/git/tutorials/git-bash) shell from your Git installation or the Bash shell from the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run all shell commands for this project.
* [Chalmers GitLab](https://git.ita.chalmers.se/) => Login with your **Chalmers CID** choosing "Sign in with" **Chalmers Login**. (contact [support@chalmers.se](mailto:support@chalmers.se) if you don't have one)
  * DIT341 course group: https://git.ita.chalmers.se/courses/dit341
  * [Setup SSH key with Gitlab](https://docs.gitlab.com/ee/ssh/)
    * Create an SSH key pair `ssh-keygen -t ed25519 -C "email@example.com"` (skip if you already have one)
    * Add your public SSH key to your Gitlab profile under https://git.ita.chalmers.se/profile/keys
    * Make sure the email you use to commit is registered under https://git.ita.chalmers.se/profile/emails
  * Checkout the [Backend-Frontend](https://git.ita.chalmers.se/courses/dit341/group-00-web) template `git clone git@git.ita.chalmers.se:courses/dit341/group-00-web.git`
* [Server Requirements](./server/README.md#Requirements)
* [Client Requirements](./client/README.md#Requirements)

## Getting started

```bash
# Clone repository
git clone git@git.ita.chalmers.se:courses/dit341/group-00-web.git

# Change into the directory
cd group-00-web

# Setup backend
cd server && npm install
npm run dev

# Setup frontend
cd client && npm install
npm run serve
```

> Check out the detailed instructions for [backend](./server/README.md) and [frontend](./client/README.md).

## Visual Studio Code (VSCode)

Open the `server` and `client` in separate VSCode workspaces or open the combined [backend-frontend.code-workspace](./backend-frontend.code-workspace). Otherwise, workspace-specific settings don't work properly.

## System Definition (MS0)

### Purpose

Our system will help users to find cafes they want to visit by looking at other users’ reviews or searching by area in the locations tab. The users will be able to create cafe pages, leave reviews for cafes they have visited and save cafe pages to create a personal favourites list.

### Pages

* Home: Displays the logo, option to register/sign, possibly a search function (but this isn’t an implementation priority)
* Cafes: list of cafes in alphabetical order, possibly have a drop down or sort feature to display by rating, location etc.
* Locations: groups cafes by location (could be streets, cities etc.)
* Specific cafe page: shows cafe details including location, opening hours, reviews
* User profile: displays user information, favourites list 
* Settings: change email and password
* User registration: user registers their information and login details
* Review page: where the user creates the review or cafe page if it doesn’t already exist

### Entity-Relationship (ER) Diagram

![ER Diagram](./images/er_diagram.png)

#### Final ER Diagram

![ER Diagram](./images/er_diagram_updated.png)

This diagram represents the final system's entities and their relationships.

## Teaser (MS3)

![Teaser](./images/teaser.png)
