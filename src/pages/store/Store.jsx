import React from 'react'
import { Section } from '../../components';
import { StoreObjects, StoreObjects2 } from './Data';

function Store() {
    return (
        <>
         <Section {...StoreObjects} />    
         <Section {...StoreObjects2} />
        </>
    )
}

export default Store
