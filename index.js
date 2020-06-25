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
    },
    {
        name: 'Alex Sten',
        number: '021-272399',
        id: 4
    },
    {
        name: 'Ole Dam',
        number: '214-223891',
        id: 5
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const info = () => {
    return(
        `<div>
            <p> Phonebook has info for ${persons.length} people </p>
            <p> ${new Date()} </p>
        </div>`
        
    )
}

app.get('/', (request, response) => {
    response.send(info())
})

app.get('/api/persons/:id', (request, response) => {
     const id = Number(request.params.id)
     const person = persons.find(person => person.id === id)
     
     if (person) {
        response.json(person)
     } else {
         response.status(404).end()
     }
     
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})