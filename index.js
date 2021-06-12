// import statements
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// import file from utilities
const HttpError = require('./utilities/http-error');

// import file from routes
const userroutes = require('./routes/user-routes');
const adminroutes = require('./routes/admin-routes');


// configuration statements
const port = 3002;
app.use(bodyParser.json);

// routing
app.use("/api/v1/user",userroutes);
app.use("/api/v2/admin",adminroutes);

app.use((req,res,next) =>{
  //creatign custom error
  const error = new HttpError("page not found",404);
  throw error;
});


app.use((error,req,res,next) => {
  res.status(error.code);
  res.json({"message":"error.message" || "An unknown error occured",code:error.code})
})

// // main methods
// app.get('/about', (req, res) => {
//   res.send(JSON.stringify({page:"about",message:"about page"}))
// })

// app.post('/login',(req,res) =>{
//     res.send(JSON.stringify({page:"login",message:"this is login page"}))
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// Import Statements
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');

// const userRoutes = require('./routes/user-routes');
// const adminRoutes = require('./routes/admin-routes');
// const HttpError = require('./utils/http-error');

// // Configuration statements
// const port = 3001;
// app.use(body-parser.json());


// // Routing
// app.use('/api/v1/user', userRoutes);
// app.use('/api/v1/admin', adminRoutes);


// // Error Handling
// app.use((req,res,next) => {
//   const error = new HttpError('Page not found',404);
//   throw error;
// });

// app.use((error, req, res, next) => {
//   res.status(error.code);
//   res.json({message: error.message || 'Unknown error occured' , code: error.code });
// });