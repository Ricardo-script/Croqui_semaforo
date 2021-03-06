import React from 'react';
import semFrontGreen from '../img/Semaforo/semFrontGreen.png';
import semLeftGreen from '../img/Semaforo/semLeftGreen.png';
import semRightGreen from '../img/Semaforo/semRightGreen.png';
import { Container, TypeObjects, Buttom, Ico  } from './styles';

export default function MenuTypeSemaforo(props){

    return(
        <Container>
            <TypeObjects id={props.name} open={props.openTypes}>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={semFrontGreen} alt='' className='front'/>
                </Buttom>
                <Buttom onClick={props.addObjectLeft}>
                    <Ico id={props.name} src={semLeftGreen} alt='' className='left'/>
                </Buttom>
                <Buttom onClick={props.addObjectRight}>
                    <Ico id={props.name} src={semRightGreen} alt='' className='right' />
                </Buttom>
            </TypeObjects>
        </Container>
    );
}

