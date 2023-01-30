import React from 'react';
import HigherOrder from './HigherOrder';
const CustomCompo=()=>{
    return <h1 className="bg-black-900">Coins</h1>
}
const CoinsCompo=HigherOrder('/coins/markets?vs_currency=usd','price',CustomCompo);
export default CoinsCompo;