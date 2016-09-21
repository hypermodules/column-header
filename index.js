var html = require('yo-yo')
var sh = require('sheetify')

var tableHeaderStyle = sh`
  :host {
    display: flex;
    background-color: #f5f5f4;
    line-height: 1.6;
    color: #333;
  }

  :host:last-child {
    border-right: 0;
  }
`

function tableHeader (columns) {
  if (!columns) columns = []
  return html`<div class=${tableHeaderStyle}>
    ${columns.map(col => headerCell(col.label, col.sort))}
  </div>`
}

var headerCellStyle = sh`
  :host {
    display: flex;
    flex-direction: row;
    padding: 2px 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    font-weight: normal;
    font-size: 12px;
    flex-grow: 1;
  }

  :host:last-child {
    border-right: 0;
  }

  .header-text {
    flex-grow: 1;
  }

  .sort-icon {
    width: 18px;
  }

  .sort-icon.ascending {
    background-image: url(/img/chevron-small-up.svg);
  }

  .sort-icon.decending {
    background-image: url(/img/chevron-small-down.svg);
  }
`

function headerCell (label, sort) {
  return html`<div class=${headerCellStyle}>
    <div class="header-text">${label}</div>
    ${sortIcon(sort)}
  </div>`
}

function sortIcon (sort) {
  if (sort === 'ascending') {
    return html`<div class="sort-icon ascending">`
  }
  if (sort === 'decending') {
    return html`<div class="sort-icon decending">`
  } else {
    return undefined
  }
}

// document.body.appendChild(headerCell('Album', 'decending'))

document.body.appendChild(tableHeader(
  [
    {
      label: 'Title'
    },
    {
      label: 'Time',
      sort: 'decending'
    },
    {
      label: 'Artist'
    },
    {
      label: 'Album'
    }
  ]
))
