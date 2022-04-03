const header = {'TOKEN' : 'qwejhsduhf1231ui23gy34hug5asd90qw3'}
require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken');const app = express()
const bodyParser = require('body-parser');
var cors = require('cors');
const authorize = require('./middleware/authorization-middleware');

// const server = require('http').createServer(app);
// const io = require('socket.io')(server  , {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Routes
const auth = require('./modules/auth')
// const house = require('./routes/house/house')
// const room = require('./routes/room/room')
// const device = require('./routes/device/device')
// const dashboard = require('./routes/dashboard/dashboard')


//middleware
// const authorize = require('./middleware/auth');

//Routes API urls
// app.use('/api/auth', auth);
// // app.use('/api/dashboard', authorize(), dashboard);
// app.use('/api/house', authorize(), house);
// app.use('/api/room', authorize(), room);


// app.get('/api/home/list', (req, res) => {

//     let data = {
//         homeList: [
//           {
//             id: 1,
//             name: 'Home1',
//             rooms: [
//               {
//                 id: 1,
//                 name: 'Room1'
//               },
//               {
//                 id: 2,
//                 name: 'Room2'
//               },
//             ]
//           },
//           {
//             id: 2,
//             name: 'Home2',
//             rooms: [
//               {
//                 id: 3,
//                 name: 'Room41'
//               },
//               {
//                 id: 4,
//                 name: 'Room42'
//               },
//             ]
//           },
//       ]
//     }
    
//     res.json({header, data})
// });

// app.get('/api/room/:id/devices', (req, res) => {

//   let data = {
//       homeList: [
//         {
//           id: 1,
//           name: 'Home1',
//           rooms: [
//             {
//               id: 1,
//               name: 'Room1'
//             },
//             {
//               id: 2,
//               name: 'Room2'
//             },
//           ]
//         },
//         {
//           id: 2,
//           name: 'Home2',
//           rooms: [
//             {
//               id: 3,
//               name: 'Room41'
//             },
//             {
//               id: 4,
//               name: 'Room42'
//             },
//           ]
//         },
//     ]
//   }
  
//   res.json({header, data})
// });

// app.post('/api/posts', authorize, (req, res) => {  
//   jwt.verify(req.token, 'secretkey', (err, authData) => {
//     if(err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'Post created...',
//         authData
//       });
//     }
//   });
// });

// app.post('/api/auth/signin', (req, res) => {
//   // Mock user
//   const user = {
//     id: 1, 
//     username: 'brad',
//     email: 'brad@gmail.com'
//   }

//   jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
//     res.json({
//       token
//     });
//   });
// });
// function verifyToken(req, res, next) {
//   // Get auth header value
//   const bearerHeader = req.headers['authorization'];
//   // Check if bearer is undefined
//   if(typeof bearerHeader !== 'undefined') {
//     // Split at the space
//     const bearer = bearerHeader.split(' ');
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }

// }



app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

//Routes API urls
app.use('/api/auth', auth);


const port =  process.env.PORT || 8000
app.listen(port, function() {
  console.log(`Running at port ${port}`);
})