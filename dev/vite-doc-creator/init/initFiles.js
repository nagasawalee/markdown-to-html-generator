const {
  readdirSync,
  copyFileSync
} = require('fs')

const { createIndexHtml } = require('../compiler')

const {
  outerPath: {
    cssPath,
    jsPath,
    htmlPath
  },
  innerDir: {
    cssDir,
    jsDir,
    htmlDir
  }
} = require('../config')

function initFiles(options) {
  copyFiles('css')
  copyFiles('js')
  copyWelcomePage()
  createIndexHtml(options)
}

function copyFiles(field) {
  let _innerFiles = []
  let _outerFiles = []
  let _dir = ''
  let _path = ''

  switch (field) {
    case 'css':
      _dir = cssDir;
      _path = cssPath;
      _innerFiles = readdirSync(cssDir)
      _outerFiles = readdirSync(cssPath)
      break;
    case 'js':
      _dir = jsDir
      _path = jsPath
      _innerFiles = readdirSync(jsDir)
      _outerFiles = readdirSync(jsPath)
      break;
    default:
      break;
  }

  //copyFilesSync 
  /**
   * param origin file 
   * param target file 
   */
  _innerFiles.map(function (innerFile) {
    if (_outerFiles.indexOf(innerFile) === -1) {
      copyFileSync(_dir + '/' + innerFile, _path + '/' + innerFile, 0, function (err) {
        if (err) {
          throw new Error('Faild to Copy File', err)
        }
      })

    }
  })

}
//copy Welcome Page
function copyWelcomePage() {
  const _htmlFiles = readdirSync(htmlPath)

  //copy Welcome Page when there is no doc in htmlFile
  if (!_htmlFiles.length) {
    copyFileSync(htmlDir + '/welcome.html', htmlPath + '/welcome.html', 0, function (err) {
      if (err) {
        throw new Error('Faild to Copy Welcome File', err)
      }
    })
  }

}



module.exports = initFiles