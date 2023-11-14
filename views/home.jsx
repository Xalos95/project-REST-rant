const React = require('react')
const Def = require('./default')


function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/ramen.jpg" alt="bowl of ramen" />
                    <div>
                        Photo by <a href="https://unsplash.com/photos/a-bowl-of-ramen-with-chopsticks-and-a-glass-of-beer-mE6kjov4rTg">Diego Lozano</a> on <a href="https://unsplash.com/s/photos/ramen">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home