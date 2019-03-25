if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://andreigagiu:andrei@cluster0-afutq.mongodb.net/test?retryWrites=true'}
}else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
