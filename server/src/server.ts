import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Fernando',
        'Bruno',
        'Felipe'
    ]);
});

app.listen(3333);