if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb+srv://andreigagiu:<fender453>@cluster0-afutq.mongodb.net/test?retryWrites=true'}
}else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
