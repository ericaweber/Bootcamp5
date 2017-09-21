//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://ericaweber:wahine17@ds121674.mlab.com:21674/ericaweber_bootcamp3', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyC7aarZu53xKNP4MHGIEbnyKp8X7j_vzII'
  },
  port: 8080
};