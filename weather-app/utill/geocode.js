const request = require('request')
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGFyc2hhMTIzNDUiLCJhIjoiY2twOGxhOGF4MDRzYTJxcW1vZ2pyazhybiJ9.GrqRNfO35wGfQro3zMSfdA'
    request({url: url, json: true}, (error, response) => {
  
     if(error){
        callback("Unable to connect to location service", undefined);
     } 
     else if (response.body.features.length === 0){
        callback("Unable to find location Try another search", undefined)
         }
         else {
            callback(undefined,{
               latitude: response.body.features[0].center[0],
               logtitude: response.body.features[0].center[1],
               location: response.body.features[0].place_name
            })
         }
        
  
    })
  
  }
  module.exports = geoCode