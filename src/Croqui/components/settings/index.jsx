import React from 'react';
import { Container } from './styles';

export default function Settings(props){
    return(
        <Container open={props.open}>
            <input type="range" />
        </Container>
    );
}