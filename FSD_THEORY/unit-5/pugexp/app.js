const express = require('express');
const app = express();

// Configure Pug as the template engine
app.set('view engine', 'pug');

app.get('/student', (req, res) => {
    const student = {
        name: 'Anita',
        branch: 'IT',
        marks: 92,
        subjects: ['Java', 'Python', 'Web Technology']
    };

    res.render('student', { student });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});