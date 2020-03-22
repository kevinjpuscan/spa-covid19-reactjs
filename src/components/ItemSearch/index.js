import React,{useMemo} from 'react';
import { Link } from "react-router-dom";

import {Text} from './styles';

export default function ItemSearch ({
    country,
    slug,
    event
}){
    const urlContry = useMemo(() => {
        return `/${slug}`;
      }, [slug]);

    return (
        <Link to={urlContry} style={{textDecoration: 'none',width:'100%',height:'100%',padding:'12px 12px',borderBottom:'1px solid #e6e6e6'}} onClick={event}>
            <Text>{country}</Text>  
        </Link>
    );
}