const {
  readdirSync,
  copyFileSync,
  writeFileSync
} = require('fs')

const {
  readFile,
  createMenuItem,
  replaceHtml,
  createIframe
} = require('../libs/utils')

const {
  title,
  outerPath: {
    htmlPath,
    rootPath
  },
  innerDir: {
    htmlDir
  },
  regexp: {
    reg_ulContent,
    reg_titleContent,
    reg_headerTitleContent,
    reg_iframeContent
  }

} = require('../config')

//create index.html
function createIndexHtml(options, outerFilename) {
  const _htmlFiles = readdirSync(htmlPath)

  //if outter html file is empty, copy index.html template
  if (!_htmlFiles.length) {
    copyFileSync(htmlDir + '/index.html', rootPath + '/index.html', 0, function (err) {
      if (err) {
        throw new Error('Faild to Copy index File', err)
      }
    })
    return
  }

  //read html str in index.html
  const _indexHtmlStr = readFile(htmlDir + '/index.html')

  let menuList = ''
  let newHtml = ''
  let curIdx = outerFilename ? [].indexOf.call(_htmlFiles, outerFilename) : 0

  //get all doc.html in outer htmlFiles, combine to menuList
  _htmlFiles.map(function (filename, index) {
    menuList += createMenuItem(filename, options.domain, options.port, index === curIdx ? true : false)
  })

  newHtml = replaceHtml(reg_ulContent, _indexHtmlStr, menuList)
  newHtml = replaceHtml(reg_titleContent, newHtml, options.title || title)
  newHtml = replaceHtml(reg_headerTitleContent, newHtml, options.title || title)
  newHtml = replaceHtml(reg_iframeContent, newHtml, createIframe(_htmlFiles[curIdx], options.domain, options.port))
  writeFileSync(rootPath + '/index.html', newHtml, function (err) {
    if (err) {
      throw new Error('Failed to write', err)
    }
  })
}

module.exports = {
  createIndexHtml
}