import styled from "styled-components";

export const ContainerDetail = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: flex-start;
    align-items: flex-start;
    overflow: auto;
    width: 100%;
    max-height: 100%;
`;

export const Title = styled.h2`
    color: black;
    margin-bootom:15px;
    margin-top:25px;
    width:100%;
    font-size:2em;
`;

export const ContainerElement = styled.div`
    display: flex;
    width:100%;
    padding:10px;
    heigth: 50px;
`;

export const ContainerIcon = styled.div`
    padding:5px 5px:
    margin-right:10px;
    float:left;
   
`;

export const ContainerIconText = styled.div`
    font-size:1.1em;
    margin-left:10px;
    margin-top:5px;
    float:right;
    font-weight: bold;

`;

export const ContainerValue = styled.div`
    color:gray;
    margin-left:10px;
    font-weight: bold;
    margin-top:5px;
    font-size: 1.3em;
`;