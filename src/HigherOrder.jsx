import { useEffect,useState } from 'react';

import Loader from './Loader';
import axios from 'axios';
const mainUrl="https://api.coingecko.com/api/v3";


const HigherOrder = (url,price,CustomCompo)=>function Func(){
    const [jsonData,setJsonData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [color,setColor]=useState(false);
    useEffect(()=>{
        const fetchingData=async()=>{
            try{
                const data=await axios.get(`${mainUrl}${url}`);
                console.log(data.data);
                setJsonData(data.data);
                setLoading(false);
            }catch(e){
                console.log(e);
            }
        }
        fetchingData();
    },[])
    const handleClick=()=>{
        
        color?setColor(false):setColor(true);
    }
    return (
        <>
        <main style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'lightcyan',flexDirection:'column'}}>
            <CustomCompo />
        {
            loading?(<Loader />):(<><main style={{display:'grid',gridTemplateColumns:'repeat(10,1fr)',alignItems:'center',}} >

              {jsonData.map((e)=>(
                    <article key={e.name} style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',border:'2px solid black',borderRadius:'10px',flexDirection:'column',padding:'10px',margin:'20px',backgroundColor:color?'lightgreen':'beige'}} onClick={handleClick}>
                        <h2>{e.name}</h2>
                        {price?(<p>{e.ath}</p>):null}
                        <img style={{width:'50px',height:'50px',backgroundPosition:'cover'}} src={e.image} alt={e.title} />
                    </article>
                ))}
                </main>
                </>
            )
              
              }
              </main>
              </>
)
            }


export default HigherOrder;