const {
  watch,
  existsSync,
  unlinkSync
} = require('fs')
//watch 监听文件或文件夹变化 不太稳定
/**
 * watch
 * param path 需要监听的文件夹或者文件路径
 * param callback 当前文件或文件夹变化时执行的回调函数
 * 
 * callback
 * param event 变化的时候告诉 是什么变化change
 * param filename 变化的文件
 */

const {
  outerPath: {
    htmlPath,
    mdPath
  }
} = require('../config')

const {
  createIndexHtml,
  mdToHtml
} = require('../compiler')

function initWatchers(options) {
  watchHtml(options)
  watchMarkdown()
}

//watch html file/folder change
function watchHtml(options) {
  watch(htmlPath, function (event, filename) {
    if (filename) {
      //event===change 
      //file changes, generate new index.html

      createIndexHtml(options, event === 'change' && filename)
    }
  })
}

//watch workspace file/folder change
function watchMarkdown() {
  watch(mdPath, function (event, filename) {
    //if change
    if (filename) {
      //does the file exist in the workspace? 
      //if it does not exist, it has been deleted.
      if (!existsSync(mdPath + '/' + filename)) {
        //also delete the corresponding html file in the html folder
        const removingFile = htmlPath + '/' + filename.replace('.md', '.html')
        existsSync(removingFile) && unlinkSync(removingFile)
        return
      }
      // if file exists in the workspace,
      //convert this markdown file to html and put it in the html folder
      mdToHtml(filename)
    }
  })
}

module.exports = initWatchers