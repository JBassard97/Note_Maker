# Note_Taker

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Description

This repository contains the refactored code for the web app "note_taker". this project is deployed and can be easily used in the browser to quickly make notes and even delete them just as fast. i've also included a css file next to the existing one to make the appearance more appealing, as "light-theme" is a sin. this project utilizes express.js, node.js, and my npm module "jbassard97nodecolors".

## Installation

To visit the live site, simply click on the Live Link. If you'd like to run this application on your local host:

1. Clone the project

2. If you're in VS Code, right-click "server.js" and select "Open in Integrated Terminal"

3. In the terminal, enter "npm i" to install the projects dependencies

4. Finally, enter "node server.js" and a localhost link will be displayed when the server is listening.

Additionally, every GET, POST, and DELETE request made will be logged to the terminal to visualize how it all works.

## Usage

Link to project: https://note-taker-gynb.onrender.com

Once the application is oppened, you'll be greeted by a calming yet professional blue gradient, the title, and the button to begin taking notes. The left hand side displays your saved notes, the right is for making them. If you begin typing anything, an optional button to clear all the fields will appear in the top right corner. Only once both fields are filled will a save button appear, allowing you to make a POST request with your title and text in that request's body. You are also able to DELETE saved notes by clicking on the red trashcan icon. Under the hood, this is achieved by assigning each note a unique id when they're created!

## Screenshots
