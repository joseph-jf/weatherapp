import React from 'react';

const Weather = props => (
   
<div>
  {props.temperature&&<p>{props.temperature}</p>}
  {props.city&&props.country&&<p>{props.city},{props.country}</p>}
  {props.humidity&&<p>{props.humidity} </p>}
  {props.description&&<p>{props.description}</p>}
  {props.error&&<p>{props.error}</p>}
  
</div>
);

 export default Weather;