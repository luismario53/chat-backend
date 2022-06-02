const express = require('express');
const app = express();
const cors = require('cors');

// Settings
app.set('port', process.env.PORT || 3002);

// middlewares 
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/users'));

//
app.listen(app.get('port'), () => {
  console.log('Server on port ',app.get('port'));
});