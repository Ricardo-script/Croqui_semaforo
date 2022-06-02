import React from 'react';
import semFront from '../img/Semaforo/semFront.png';
import semLeft from '../img/Semaforo/semLeft.png';
import semRight from '../img/Semaforo/semRight.png';
import { Container, TypeObjects, Buttom, Ico  } from './styles';

export default function MenuTypeSemaforo(props){

    return(
        <Container>
            <TypeObjects id={props.name} open={props.openTypes}>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={semFront} alt='' />
                </Buttom>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={semLeft} alt='' />
                </Buttom>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={semRight} alt='' />
                </Buttom>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={''} alt='' />
                </Buttom>
            </TypeObjects>
        </Container>
    );
}