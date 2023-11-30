const colors = require("jbassard97nodecolors"); // The return of my npm module! 🌈
const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const fs = require("fs");

module.exports = { colors, express, router, path, app, fs };
