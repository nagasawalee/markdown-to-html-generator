const {
  initFolders,
  initFiles,
  initWatchers
} = require('./init')

//markdown测试
//const { mdToHtml } = require('./compiler')

class ViteDocCreator {
  constructor(option) {
    console.log('vite-doc-creator');
    this.option = {
      //webpage title
      title: undefined,
      //port
      port: 0,
      //domain
      domain: undefined
    }

    if (option) {
      //merge user config with default config
      Object.assign(this.option, option)
    }

    console.log(this.option);

    this.initialize()
  }

  initialize() {

    initFolders(this.option)//workspace src

    initFiles(this.option)//html css js 

    initWatchers(this.option)//watch file/folder change

    //测试markdown
    //mdToHtml('README.md')
  }
}

module.exports = ViteDocCreator;