const express = require('express');

const app = express();
const port = 3000;

const users = ['647e518c194ae5b5f16a55b3']

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
   
    if(users.find(userID => userID === id)) {
        console.log('Usuario existente')
        res.send('Usuario existente')
    }
    else {
        users.push(id);
        console.log(`Usuario nuevo registrado, id:${id}`)
        res.send('Usuario nuevo registrado')
    }
})

app.listen(port, () => {
    console.log(`Server connected on port ${port}`);
})