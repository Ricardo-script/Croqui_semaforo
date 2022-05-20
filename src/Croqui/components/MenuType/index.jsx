import React from 'react';
import direita from '../../components/img/direita.png';
import car from '../../components/img/car.png';
import arrowSideStart from '../../components/Objects/Setas/arrowSideStart.png';
import { Container, TypeObjects, Buttom, Ico  } from './styles';

export default function MenuType(props){

    return(
        <Container>
            <TypeObjects id={props.name} open={props.openTypes}>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={
                        props.name === 'topToright' ? direita :
                        props.name === 'topToleft'  ? car : 
                        props.name === 'top'  ? car :  ''

                    } alt='' />
                </Buttom>
                <Buttom>
                    <Ico id='arrow' src={
                         props.name === 'topToright' ? arrowSideStart :
                         props.name === 'topToleft'  ? car : 
                         props.name === 'top'  ? car :  ''
                    } alt='' 
                    />
                </Buttom>
                <Buttom>3</Buttom>
            </TypeObjects>
        </Container>
    );
}