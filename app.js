const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World - this is Barton again - finally does it reflect my changes? YES!!! Now let us see it in the logs2.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
