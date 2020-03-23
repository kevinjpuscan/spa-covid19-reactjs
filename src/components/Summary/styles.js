import styled from "styled-components";

export const Table = styled.table`
    width:100%;
    border: 1px solid #e6e6e6;
    border-radius: 0px 0px 15px 15px;
    background-color:white;
    margin-bottom:50px;
`;

export const Head = styled.tr`
    background-color: #0e89f8;
    border: 1px solid #0e89f8;
    color:white;
    text-align:center;
    padding:0;
`;

export const ElementHead = styled.th`
    text-align:center;
    padding:15px;
    border: 0px solid #0e89f8;
    margin:0px;
`;

export const ElementFirst= styled.td`  
    text-align:left;
    padding:10px 15px;
    font-weight:bold;
    


`;

export const Element= styled.td`
    text-align:center;
    padding:10px 15px;
`;

export const IncrementSpan=styled.span`
    border-radius:5px;
    padding:3px;
    font-size:0.7em;
    background-color:#e6e6e6;
    color:gray;
    font-weight:bold;

    ${Element}:hover & {
      
      }
`;
