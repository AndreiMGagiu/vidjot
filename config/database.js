if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://andrei:fenderslashandrei@SG-vdprod-19749.servers.mongodirector.com:48065,SG-vdprod-19748.servers.mongodirector.com:48065,SG-vdprod-19750.servers.mongodirector.com:48065/admin?replicaSet=RS-vdprod-0&ssl=true'}
}else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
