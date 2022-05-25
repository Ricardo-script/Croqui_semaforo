import React from 'react';
import direita from '../../components/img/direita.png';
import car from '../../components/img/car.png';
import arrowSideStart from '../../components/img/Setas/arrowSideStart.png';
import arrowStartTopLeft from '../../components/img/Setas/arrowStartTopLeft.png';
import arrowStart from '../../components/img/Setas/arrowStart.png';
import arrowRigthToBottom from '../../components/img/Setas/arrowRigthToBottom.png';
import arrowStartRigthToTop from '../../components/img/Setas/arrowStartRigthToTop.png';
import { Container, TypeObjects, Buttom, Ico  } from './styles';

export default function MenuType(props){

    return(
        <Container>
            <TypeObjects id={props.name} open={props.openTypes}>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={
                        props.name === 'topToright' ? direita :
                        props.name === 'topToleft'  ? car : 
                        props.name === 'top' ? car : 
                        props.name === 'rightToDown' ? car : 
                        props.name === 'rightTotop' ? car : ''

                    } alt='' />
                </Buttom>
                <Buttom onClick={props.addObjectArrow}>
                    <Ico id={'arrow' + props.name} src={
                        props.name === 'topToright' ? arrowSideStart :
                        props.name === 'topToleft'  ? arrowStartTopLeft : 
                        props.name === 'top' ? arrowStart :  
                        props.name === 'rightToDown' ? arrowRigthToBottom : 
                        props.name === 'rightTotop' ? arrowStartRigthToTop : ''
                    } alt='' 
                    />
                </Buttom>
                <Buttom>3</Buttom>
            </TypeObjects>
        </Container>
    );
}