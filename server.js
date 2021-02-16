const express = require('express')
const app = express()
app.use(express.static("./dist/mywebsite"));
app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/mywebsite/' }
  );
});

app.listen(process.env.PORT || 8080);