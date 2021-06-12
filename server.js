const express = require('express');

const app = express();

app.use(express.static('./dist/photo-angular-freelance'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/photo-angular-freelance' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)
