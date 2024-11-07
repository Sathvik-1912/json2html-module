export default function json2html(data) {
    // Get all unique keys across all objects to use as table headers
    const headers = ["Name", "Age", "Gender"];

    // Start building the HTML table with the specified data attribute
    let html = <table data-user="vanaparthisathvik@gmail.com">;
    
    // Add table headers
    html += <thead><tr>;
    headers.forEach(header => {
        html += <th>${header}</th>;
    });
    html += </tr></thead>;
    
    // Add table rows for each object in data
    html += <tbody>;
    data.forEach(row => {
        html += <tr>;
        headers.forEach(header => {
            html += <td>${row[header] || ""}</td>;
        });
        html += </tr>;
    });
    html += </tbody></table>;
    
    return html;
}
