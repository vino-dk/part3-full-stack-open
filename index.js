const express = require('express')
const app = express()

let persons = [
    {
        name: 'Arto Hellas',
        number: '090-231234',
        id: 1
    },
    {
        name: 'Carl Johnson',
        number: '110-432434',
        id: 2
    },
    {
        name: 'Jens Hansen',
        number: '423-278291',
        id: 3
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})