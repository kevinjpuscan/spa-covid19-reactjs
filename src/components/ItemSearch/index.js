import React,{useMemo} from 'react';
import { Link } from "react-router-dom";

import {Text} from './styles';

export default function ItemSearch ({
    country,
    slug
}){
    const urlContry = useMemo(() => {
        return `/${slug}`;
      }, [slug]);

    return (
        <Link to={urlContry} style={{textDecoration: 'none'}}>
            <Text>{country}</Text>   
        </Link>
    );
}