import React from 'react';

import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import {
    ContainerDetail,
    Title,
    ContainerElement,
    ContainerIcon,
    ContainerIconText,
    ContainerValue} from './styles';

export default function Detail({country}) {
    const {name,confirmed,deaths,recovered}=country;

    return (
        <ContainerDetail>
            <Title>
                {name}
            </Title>
            <ContainerElement>
                <ContainerIcon>
                    <AirlineSeatFlatIcon/>
                    <ContainerIconText>
                    Confirmados:
                    </ContainerIconText>
                    
                </ContainerIcon>
                <ContainerValue>
                {confirmed}   
                </ContainerValue>  
            </ContainerElement>

            <ContainerElement>
                <ContainerIcon>
                    <SentimentVeryDissatisfiedIcon/>
                    <ContainerIconText>
                    Fallecidos:
                    </ContainerIconText>
                </ContainerIcon>
                <ContainerValue>
                {deaths}   
                </ContainerValue>  
            </ContainerElement>

            <ContainerElement>
                <ContainerIcon>
                    <SentimentVerySatisfiedIcon/>
                    <ContainerIconText>
                    Recuperados:
                    </ContainerIconText>
                </ContainerIcon>
                <ContainerValue>
                {recovered}   
                </ContainerValue>  
            </ContainerElement>

        </ContainerDetail>
    )
  }
  