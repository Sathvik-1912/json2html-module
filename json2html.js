// json2html.js
export default function json2html(data) {
  const columns = new Set();

  // Collect unique column names
  data.forEach(item => Object.keys(item).forEach(key => columns.add(key)));

  // Create table with data-user attribute
  let html = '<table data-user="vanaparthisathvik@gmail.com">';
  html += '<thead><tr>';

  // Add headers
  columns.forEach(column => {
    html += `<th>${column}</th>`;
  });
  html += '</tr></thead><tbody>';

  // Add rows
  data.forEach(item => {
    html += '<tr>';
    columns.forEach(column => {
      html += `<td>${item[column] || ''}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  return html;
}
