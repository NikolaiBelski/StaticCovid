import UseGetCountries from "../hook/Hook";
import { useState,useMemo } from "react";
import styled from "styled-components";
import Contriesdata from "./CoutriesData";

const Countries = () => {
    const [country,setCountry] = useState('');
    const [countryOptions,setCountryOptions] = useState([]);
    const [countrySelected, setCountrySelected] = useState('')

    const {data:countries} = UseGetCountries();
  


    const handleInput = (e) => {
        if (e.target.value) {
            setCountry(e.target.value);
            const options = countries.filter(item => {
                       const reges = new RegExp(e.target.value,'gi');
                       return item.name.match(reges)

            });
             setCountryOptions(options)
          
        
        }
        else  {
            setCountry('');
            setCountryOptions([]);
            
        }


    };


    const handleClick = (name) => {
        setCountrySelected(name);
        setCountryOptions([]);
        setCountry(name)

    }

    const renderCount = (flagUrl,name,id) => {
       return flagUrl?(<div className="option" key={id} onClick = {()=>handleClick(name)}>
                    <img src={flagUrl} alt={name}/>
                    <span>{name}</span> 

                </div>) :null

    }


    return (
       <Container>
            <div className="form">
                <h2>Counter</h2>
                <input type="text" value={country} onChange = {handleInput}/>
                {
                    !!countryOptions.length && (
                        <div>
                            {countryOptions.map(({name,id,media})=>renderCount(media.flag,name,id)).slice(0,4)}
                        </div>


                        )
                }
            </div>

             {countrySelected?<Contriesdata name={countrySelected}/>:null}

      </Container>
    
    )
};
const Container = styled.div` display: flex;
justify-content: space-between;
max-width: 610px;
margin: 50px auto 0;
.form {
    width: 210px;
    min-height: 26px;
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 16px;
}
.option {
    border-bottom: 1px solid #eee;
    padding: 5px;
    cursor: pointer;
    img {
        max-width:30px;
        margin-right: 10px;
    }
}





`;

export default Countries