const express = require('express');
const path = require('path');

const router = new express.Router();

// Get the admin pannel
router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'admin', 'build', 'index.html'));
});

module.exports = router;
