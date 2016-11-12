
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Задание 2А
app.get('/t', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

// Задание 2В
app.get('/f', (req, res) => {
  var fullname = req.query.fullname.trim().replace(/\s+/g," ");
  if(fullname.length > 0){
    fullname = fullname.split(/\s/);
    switch (fullname.length) {
      case 0:{
        res.send('Invalid fullname');
      }break;
      case 1:{
        res.send(fullname[0]);
      }break;
      case 2:{
        res.send(fullname[1] +" "+ fullname[0].substr(0,1) + ".");
      }break;
      case 3:{
        res.send(fullname[2] +" "+ fullname[0].substr(0,1) + ". " + fullname[1].substr(0,1)+".");
      }
        break;
      default:{
        res.send('Invalid fullname');
      }
    }
  }else{
    res.send('Invalid fullname');
  }
});

// Задание 2С
app.get('/c', (req, res) => {
    let url = req.query.username || '';
    let username = url.match(/\b\/@?([\w\.]+)|^@?([\w\.]+)$/);

    if (username === null) {
        return res.send('Invalid username');
    }

    res.send('@' + (username[1] || username[2]));
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
