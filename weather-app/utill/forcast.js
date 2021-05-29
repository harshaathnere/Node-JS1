const request = require('request');
 const forcast = (latitude, logtitude, callback) => {
   const url ='https://api.darksky.net/forecast/5cfc84e0ce6384cf83b839aedd5668cd/'+latitude+ ','+logtitude+'?lang=es'

   request({url: url, json: true}, (error,{body}) => {

     if(error){
    callback("Unable to connect weather service", undefined)
     }
     else if (body.error) {
   callback("Unavle to find the location ", undefined)
     }
      else {
      callback(undefined,body.daily.data[0].summary +'It is currently' +body.currently.temperature + 'degress out. There is a 0% chance of rain' +body.currently.precipIntensity +'% chance  of rain')
      }

   } )
 }

 module.exports =  forcast