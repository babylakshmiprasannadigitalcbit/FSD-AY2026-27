const express = require('express');
const app = express();

// Configure EJS as the template engine
app.set('view engine', 'ejs');

app.get('/student', (req, res) => {
    const student = {
        name: 'Ravi',
        branch: 'CSE',
        marks: 85,
        subjects: ['DBMS', 'OS', 'Computer Networks']
    };

    res.render('student', { student });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});