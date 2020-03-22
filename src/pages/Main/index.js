import React,{useContext} from 'react';


import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import Detail from '../../components/Detail';
import ChartLine from '../../components/ChartLine';
import Summary from '../../components/Summary';

import {CountryContext} from '../../store/context/CountryContext';


import {
  Container,
  Aside,
  ContainerBody,
  ContainerChart,
  ContainerFooter
} from "./styles";

function Main({ match }) {
  const {
    country,
    confirmed,
    deaths,
    recovered,
    loading,
    summary,
    loadDataCountryAction,
    loadSummaryAction,
    resetCountry
  } = useContext(CountryContext) ;

  React.useEffect(() => {
    const { country } = match.params;
    resetCountry();

    if(country){
      loadDataCountryAction(country);
    }else{
      loadSummaryAction();
    }
    
    return () => {

    };

    //eslint-disable-next-line
  }, [match.params]);

  return (

    <div>
        <Header />
        <Container>
    
        <Aside>
          
          <ContainerBody>
          {
            match.params.country?(
              loading ? 
              (
                <Spinner style={{ marginTop: "100px" }} />
              ):
              (
                <Detail country={country}/> 
              )
            ):(
              <h2 style={{
                textAlign:'center',
                color:'gray',
                marginTop:'60px'
                }}>
              Puede buscar un país en específico para ver más detalle
              </h2>
            )
            
          }
          </ContainerBody>
          <ContainerFooter>
            Desarrollado por KevinPuscán
          </ContainerFooter>
        </Aside>

        <ContainerChart>
          {
            match.params.country?(
            loading ? 
            (
              <Spinner style={{ marginTop: "100px" }} />
            ):
            (
              <ChartLine confirmed={confirmed} deaths={deaths} recovered={recovered}></ChartLine>
            )):(
              loading?
              (
                <Spinner style={{ marginTop: "100px" }} />
              ):
              (
                <Summary summary={summary}/>
              )
              
            )
          }
          
        </ContainerChart>
      </Container>
      </div>

  );
}

export default Main;
