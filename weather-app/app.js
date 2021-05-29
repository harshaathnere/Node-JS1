// console.log("hello")

// setTimeout(()=> {
//   console.log("in function")
// },1000 )
// console.log("stop");
const request = require('request')

const geoCode = require('./utill/geocode');
const forcast = require('./utill/forcast.js')
const address = process.argv[2]
console.log(process.argv);

if(!address){
   console.log("Plaese provide the address ")
}
else {
   geoCode(address, (error, {latitude,logtitude, location}) => {
      if(error){
         return  console.log(error)
      }
  //   console.log('Error',error)
  //  console.log('data',data)
    forcast(latitude,logtitude, (error, forcastData) => {
     if(error){
        return  console.log(error)
     }
   console.log(location)
   console.log(forcastData)
   //  console.log('Error',error)
    //console.log('data',data)
   })
   })
   
  
}

// const url = 'https://api.darksky.net/forecast/5cfc84e0ce6384cf83b839aedd5668cd/37.8267,-122.4233?lang=es'
// request ({url: url, json: true},(error, response) => {
//    if(error){
//    console.log('Unable to connect weather service')
//    }
//    else if(response.body.error){
//       console.log('Unable to find location')
//    }
//    else {
//       console.log(response.body.daily.data[0].summary +'It is currently' +response.body.currently.temperature + 'degress out. There is a 0% chance of rain' +response.body.currently.precipIntensity +'% chance  of rain')
//    }
  
//    console.log(error);
  
//    //console.log(response.body.daily.data[0].summary +'It is currently' +response.body.currently.temperature + 'degress out. There is a 0% chance of rain' +response.body.currently.precipIntensity +'% chance  of rain')
// })

// Geo Coding Service
// Address
// const geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFyc2hhMTIzNDUiLCJhIjoiY2twOGxhOGF4MDRzYTJxcW1vZ2pyazhybiJ9.GrqRNfO35wGfQro3zMSfdA"
//  request({url: geocodingURL, json: true}, (error, response)=> {

//    if(error){
//       console.log("Unable to connect to location service");

//    }
//    else if (response.body.features.length === 0){
//     console.log("Unable to find location Try another search")
//    }
//    else
//     const latitude = response.body.features[0].center[0];
//     const logtitude = response.body.features[0].center[1];
//     console.log(latitude, logtitude)

// })
 
 