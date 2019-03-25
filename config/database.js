if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://andreigagiu:fender453@cluster0-afutq.mongodb.net/test?retryWrites=true'}
}else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
