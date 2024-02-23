const { marked } = require('marked')
const highlight = require('highlight.js')
const { writeFileSync } = require('fs')
const { readFile } = require('../libs/utils')
const {
  regexp: {
    reg_mdStr
  },
  outerPath: {
    mdPath,
    htmlPath
  },
  innerDir: {
    htmlDir
  }
} = require('../config')

//markdown config
marked.setOptions({
  //highlight
  highlight: function (code) {
    return highlight.highlightAuto(code).value
  }
}

)

//html = markdown(_mdStr)
//markdown to html
function mdToHtml(filename) {
  //read markdown file
  const _mdStr = readFile(mdPath + '/' + filename)
  //read markdown to html template - md.html
  let _htmlStr = readFile(htmlDir + '/md.html')
  //markdown to html str
  const newStr = marked.parse(_mdStr)
  //replace {{newStr}} in md.html to html newStr
  _htmlStr = _htmlStr.replace(reg_mdStr, newStr)
  //write _htmlStr into html, save to src/html
  writeFileSync(htmlPath + '/' + filename.replace('.md', '.html'), _htmlStr, function (err) {
    if (err) {
      throw new Error('Failed to write mdToHtml', err)
    }
  })
}

module.exports = {
  mdToHtml
}