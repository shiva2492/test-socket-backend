var express = require('express');//Importing Express
var app = express();//Getting App From Express
const port = 8080;//Creating A Constant For Providing The Port
app.listen(port,'127.0.0.1');//Telling Express App To Listen To Port
//Routing Request : http://localhost:port/
app.get('/',function(request,response){
  //Telling Browser That The File Provided Is A HTML File
  response.writeHead(200,{"Content-Type":"text/html"});
  //Passing HTML To Browser
  response.write("The Server Is <strong>Working</strong>!");
  //Ending Response
  response.end();
})
console.log("Server Running At:localhost:"+port);
