var html = require('yo-yo')
var sh = require('sheetify')

var style = sh('./style.css')

var el = list([
  'grizzly',
  'polar',
  'brown',
  'green'
])

function list (items) {
  return html`<main class=${style}>
  <ul>
    ${items.map(function (item) {
      return html`<li>${item}</li>`
    })}
  </ul>
  </main>
  `
}

document.body.appendChild(el)
