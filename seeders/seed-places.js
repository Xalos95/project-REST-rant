require('dotenv').config()
const db = require('../models')

db.Place.create ([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'public/images/thai.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Pheonix',
    state: 'AZ',
    cuisines: 'coffee, bakery',
    pic: 'public/images/cafe.jpg',
    founded:2020
}])

.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})