const express = require('express');
const cors = require('cors'); // <--- 1. Import cors
const app = express();

app.use(cors()); // <--- 2. Use it (Allows everyone to connect)

app.get('/', (req, res) => {
    res.send('Home Page');
});

// ... rest of your routes ...

app.listen(3000, () => console.log('Server running...'));