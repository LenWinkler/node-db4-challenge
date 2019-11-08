const server = require('../server.js');

const PORT = process.env.PORT || 4013;

server.listen(PORT, () => {
    console.log(`\nlistening on port ${PORT}\n`)
});