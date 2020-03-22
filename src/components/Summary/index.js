import React from 'react';
import {
    Table,
    Head,
    ElementHead,
    ElementFirst,
    Element
} from './styles';

export default function Summary({summary}){

return(
    <Table cellSpacing={0}>
    <Head>
      <ElementHead>Pais</ElementHead>
      <ElementHead>Confirmados</ElementHead>
      <ElementHead>Fallecidos</ElementHead>
      <ElementHead>Recuperados</ElementHead>
    </Head>
    
        <tbody>
            {
            summary.map(country=>(
            <tr key={country.Country}>
                <ElementFirst>{country.Country}</ElementFirst>
                <Element>{country.TotalConfirmed}</Element>
                <Element>{country.TotalDeaths}</Element>
                <Element>{country.TotalRecovered}</Element>
            </tr>
            ))
            }
        </tbody>   

    
    
  </Table>
);
}