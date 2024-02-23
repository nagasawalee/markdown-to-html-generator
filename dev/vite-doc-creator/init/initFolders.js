const { mkdirSync, existsSync } = require('fs')

const {
  outerPath: {
    srcPath, //src
    jsPath, //src/js
    cssPath, //src/css
    htmlPath, //src/html
    mdPath //workspace
  }
} = require('../config')

function initFolders() {

  //Create folders if it does not exist
  if (!existsSync(srcPath)) {
    createFolder(srcPath)
  }

  if (!existsSync(jsPath)) {
    createFolder(jsPath)
  }

  if (!existsSync(cssPath)) {
    createFolder(cssPath)
  }

  if (!existsSync(htmlPath)) {
    createFolder(htmlPath)
  }

  if (!existsSync(mdPath)) {
    createFolder(mdPath)
  }
}

function createFolder(path) {
  //mkdirSync - create sync folder
  /**
   * param path 
   * param callback - throw error
   */
  mkdirSync(path, function (err) {
    if (err) {
      throw new Error('Failed to create Folder', err)
    }
  })
}

module.exports = initFolders