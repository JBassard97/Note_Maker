// Importing everything here. This saves MANY lines.

const colors = require("jbassard97nodecolors"); // The return of my npm module! 🌈 Enjoy!
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

module.exports = { colors, express, path, app, fs };
