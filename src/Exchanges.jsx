import React from 'react';
import HigherOrder from './HigherOrder';
const CustomCompo=()=>{
    return <h1>Exchanges</h1>
}
const ExchangesCompo=HigherOrder('/exchanges',null,CustomCompo);
export default ExchangesCompo;