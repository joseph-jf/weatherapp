import React from 'react';
import Title from './component/title';
import Form from './component/forma.js';
import Weather from './component/weather';


const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167"


class App extends React.Component{
  state ={
    temperature: undefined,
    city: undefined,
    country:undefined,
    humidity: undefined,
    description: undefined,
    error:undefined
  }
getWeather= async (e) =>{
  e.preventDefault();
 const city= e.target.elements.city.value;
 const country= e.target.elements.country.value
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
const data = await api_call.json();
console.log(data)
if(city && country){
  this.setState({
   temperature: data.main.temp,
   city:data.name,
   country:data.sys.country,
   humidity:data.main.humidity,
   description:data.Weather[0].description,
   error:""
  });
}else {
    this.setState({
 
     temperature: undefined,
     city: undefined,
     country:undefined,
     humidity: undefined,
     description:undefined,
     error:"please enter the values"
  
    });
}

}
  render(){ 
     return (
       <div>
        <Title/>,
        <Form getweather={this.getweather}/>,
        <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
        />
        </div>
     )
  }
}

export default App;