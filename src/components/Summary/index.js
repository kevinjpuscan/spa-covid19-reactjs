import React from 'react';
import {Link} from 'react-router-dom';
import {
    Table,
    Head,
    ElementHead,
    ElementFirst,
    Element,
    IncrementSpan
} from './styles';


export default function Summary({summary}){
 
return(
    <Table cellSpacing={0}>
    <thead>
    <Head>
      <ElementHead>Pais</ElementHead>
      <ElementHead>Confirmados</ElementHead>
      <ElementHead>Fallecidos</ElementHead>
      <ElementHead>Recuperados</ElementHead>
    </Head>
    </thead>
        <tbody>
            {
            summary.map(country=>(

            <tr key={country.Country}>
            <Link to={"/"+country.Country} style={{textDecoration:'none',color:'black'}}>
            <ElementFirst>{country.Country}</ElementFirst>
            </Link>
                
                <Element>{country.TotalConfirmed} <IncrementSpan>+{country.NewConfirmed}</IncrementSpan></Element>
                <Element>{country.TotalDeaths} <IncrementSpan>+{country.NewDeaths}</IncrementSpan></Element>
                <Element>{country.TotalRecovered} <IncrementSpan>+{country.NewRecovered}</IncrementSpan></Element>
            </tr>

            ))
            }
        </tbody>   

    
    
  </Table>
);
}