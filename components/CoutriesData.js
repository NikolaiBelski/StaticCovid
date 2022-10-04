import styled from "styled-components"
import { GetStaticCovid } from "../hook/Hook";

const Contriesdata = ({name}) => {
    const {date,loading,errorMessage} = GetStaticCovid(name);
  
return (
    <Container>
        {errorMessage&& <p className="message error">...Error</p>}
        {loading&& <p className="message">Идет загрузка</p>}
        { 
        date && Object.keys(date).length && !errorMessage && !loading &&(
            <>
            <h1>Страна:{name}</h1>
            <h2>Статистика</h2>
            <div className="stats">
                <p><span>Всего случаев :</span> {date.confirmed.value}</p>
                <p><span>Выздоровело : </span> {date.recovered.value}</p>
                <p><span>Умерло: </span> {date.deaths.value}</p>
            </div>
            
            
            </>
        )

        }
    </Container>
)
}


export default Contriesdata;

const Container = styled.div`
    width: 326px;
    height: 78px;
    position: relative;
    .message {
        position: absolute;
        left: 0;
        bottom: 0;
        margin: 0;
        font-size: 30px;
        color: #26c281;
    }
    .error {
        color: red;
    }
    .stats {
        display: flex;
        p {
            display: flex;
            flex-direction:column;
            margin: 0 10px 0 0;
        }
    }
`;