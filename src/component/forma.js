import React from 'react';

const Form = props => (
   
      <form  onSubmit= {props.getWeather}>
         <input type="text" placeholder='city...' name='city' />
         <input type="text" placeholder='country...' name='city'/>
         <button>Get Weather</button>
      </form>
 

);

 export default Form;