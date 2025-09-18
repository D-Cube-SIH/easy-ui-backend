const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
     origin: 'https://dcube-dashboard.netlify.app'
}));

app.use(express.json());

const checkCredientials = (username , password) => {
     const users = ['Krishna' , 'Kevin' , 'Lokesh' , 'Madhesh' , 'Pretheba' , 'Rachel' , 'Sudha'];
     const passwords = ['784' , '886' , '735' , '861' , '915' , '936' , '1028'];
     for(let i = 0 ; i < users.length; i++){
          if(users[i] == username && passwords[i] == password){
               return true;
          }
     }
     return false;
}

app.post('/user', (req, res) => {
     let crediendials = req.body;

     if(checkCredientials(crediendials.username , crediendials.password)){
          res.json({ invalid: false, redirect: '/dashboard.html' });
     }else{
          res.json({ invalid: true });
     }
});

app.post('/dashboard', (req, res) => {
     res.sendFile(__dirname + '/index.html');
});

// start server
app.listen(8080, () => {
     console.log('Server running on port 8080');
});
