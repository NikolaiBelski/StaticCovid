import { useEffect, useState } from "react"
import { resolve } from "styled-jsx/css";

const UseGetCountries = () => {

const [data,setData] = useState([]);

   useEffect(()=>{
   async function dataLand () {
                const response = await fetch('https://api.sampleapis.com/countries/countries')
                                        .then(elem=>elem.json())
                                        .catch(er=>console.log(er));
                                        setData(response)
                                    
            };
            dataLand();
            
            
            },[])

return {
    data
}};


export const GetStaticCovid = (name) => {

    const [date,setDate] = useState({});
    const [loading,setLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');

const pause = () => {
    return new Promise(resolve => {
        setTimeout(resolve,1000);
    })
}


    useEffect(()=> {
        async function getCovid() {
            setLoading(true);
            setErrorMessage('')

            await pause();
            
            const response = await fetch(`https://covid19.mathdro.id/api/countries/${name}`).then(resp=>resp.json()).catch(er=>console.log(er))
           !response.error?setDate(response):setErrorMessage(response.error.message)
            setLoading(false)
        };
        
        getCovid();
    },[name])

    return {
        date,
        loading,
        errorMessage
    }

}





export default UseGetCountries