const React = require('react')

function Def (html) {
    return (
        <html>
            <title>Title</title>
            <body>
                {html.children}
            </body>
        </html>
        
    )
}

module.exports = Def