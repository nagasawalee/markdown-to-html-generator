# Markdown to HTML Doc Generator

*A Light Markdown To HTML Document Generator*

*一个轻快的HTML文档生成器*

## Introduction

This is a Markdown to HTML Document Generator by [vite](https://github.com/vitejs/vite)

1. Generate document webpage code fastly
2. Edit markdown and generate html code as well as webpage
3. Generate corresponding document menu

## Dependencies
1. [Vite](https://github.com/vitejs/vite) environment
2. [marked](https://github.com/markedjs/marked)、[highlightjs](https://highlightjs.org/)

## Getting Started
1. Download the code, enter the project directory in terminal

2. Download dependencies
   ```shell
   npm install
   ```

3. Run project
   ```shell
   npm run dev
   ```

4. 

   - Place your markdown file at **workspace** folder and save
   - Generate HTML doc and doc list menu automaticity
   - Show in webpage, no need to refresh


### Config
1. Change config at **vite.config.js**
  ```js
  module.exports = {
    plugins: [new ViteDocCreator({
      // config
    })]
  }
  ```
2. Config filed

  |  Config  | Default                              | Required |
  |  ----  | -------              | ----  |
  |  title      | Doc Creator - markdown to HTML | N |
  | domain      | http://localhost | N |
  | port      | process.env.npm_config_port | N |

## How it works
  1. Create directory
     src ->
       js
       css
       html
     workspace
  2. Generate doc
     Copy：js/css/welcome.html
     Compile：index.html      / md.html
          createIndexHtml   mdToHtml
  3. Watch file/folder change
     watchHtml    /  watchMarkdown
