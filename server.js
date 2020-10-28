const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

//Connect to DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running.'));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));
