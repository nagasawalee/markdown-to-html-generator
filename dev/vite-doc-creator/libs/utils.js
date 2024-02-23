const { readFileSync } = require('fs')
const {
  domain,
  port
} = require('../config')

//r/w doc encapsulation
function readFile(path) {
  return readFileSync(path, 'utf8')
}

//create menu template
function createMenuItem(filename, userDomain, userPort, isActive) {
  return `
    <li class="menu-item${isActive ? ' active' : ''}">
      <a href = "${_formatBaseUrl(userDomain, userPort)}/src/html/${filename}" target="myFrame">${filename.replace('.html', '')}</a>
    </li>
  `
}

//create iframe
function createIframe(filename, userDomain, userPort) {
  return `
    <iframe src="${_formatBaseUrl(userDomain, userPort)}/src/html/${filename}" name="myFrame"></iframe>
  `
}

//set up baseUrl
function _formatBaseUrl(userDomain, userPort) {
  //str to num
  userPort = Number(userPort)


  if (userDomain && userPort) {
    return `${userDomain}:${userPort}`
  } else if (userDomain && !userPort) {
    return `${userDomain}`
  } else if (!userDomain && userPort) {
    return `${domain}:${userPort}`
  } else if (!userDomain && !userPort) {
    return `${domain}:${port}`
  } else {
    return `${domain}:${port}`
  }
}

function replaceHtml(regexp, html, content) {
  return html.replace(html.match(regexp)[1], content)
}

module.exports = {
  readFile,
  createMenuItem,
  replaceHtml,
  createIframe
}