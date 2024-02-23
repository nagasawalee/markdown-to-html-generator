//port domain title path
const { resolve } = require('path')
//default port
const port = process.env.npm_config_port
const domain = 'http://localhost'
const title = 'Doc Creator - markdown to HTML'

/**Project Structure
 * Out
 * root
 * scr ->
 *    css ->
 *    js ->
 *    html -> md ->html
 * workspace -> edit markdown
 * index.html
 */
const outerPath = {
  rootPath: resolve(__dirname, '../../../'),
  srcPath: resolve(__dirname, '../../../src/'),
  htmlPath: resolve(__dirname, '../../../src/html/'),
  jsPath: resolve(__dirname, '../../../src/js/'),
  cssPath: resolve(__dirname, '../../../src/css/'),
  mdPath: resolve(__dirname, '../../../workspace')
}

/**Plugin Structure
 * Inner template
 * temp_files ->
 *    css ->
 *    js ->
 *    html -> index.html template
 *            md.html template
 *            welcome.html 
 */
const innerDir = {
  rootDir: resolve(__dirname, '../temp_files/'),
  htmlDir: resolve(__dirname, '../temp_files/html/'),
  cssDir: resolve(__dirname, '../temp_files/css/'),
  jsDir: resolve(__dirname, '../temp_files/js/')
}

//match by regression
const regexp = {
  //match - ul menu-list 
  reg_ulContent: /<ul class=\"menu-list\">([\s\S]*?)<\/ul>/,
  //title
  reg_titleContent: /<title>([\s\S]*?)<\/title>/,
  //header-title
  reg_headerTitleContent: /<h1 class=\"header-title\">([\s\S]*?)<\/h1>/,
  //iframe page
  reg_iframeContent: /<div class=\"iframe-page\">([\s\S]*?)<\/div>/,
  // {{newStr}} in md.html
  reg_mdStr: /\{\{(.+?)\}\}/
}



module.exports = {
  port,
  domain,
  title,
  outerPath,
  innerDir,
  regexp
}