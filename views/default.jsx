const React = require('react')

function Def (html) {
    return (
        <html>
            <title>Title</title>
            <link rel="stylesheet" href="" />
            <link rel="stylesheet" href="/css/style.css" />
            <body>
                {html.children}
            </body>
        </html>
        
    )
}

module.exports = Def