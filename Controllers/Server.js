const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/compile', (req, res) => {
  const { code } = req.body;
  exec('gcc -x c -o temp/temp_exe -', (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ output: stderr });
      return;
    }
    exec('temp/temp_exe', { input: code }, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ output: stderr });
        return;
      }
      res.json({ output: stdout });
    });
  }).stdin.end(code);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
