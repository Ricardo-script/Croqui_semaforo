import React from 'react';
import carRed from '../../components/img/carRed.png';
import car from '../../components/img/car.png';
import esquerda from '../../components/img/esquerda.png';
import arrowSideStart from '../../components/img/Setas/arrowSideStart.png';
import arrowStartTopLeft from '../../components/img/Setas/arrowStartTopLeft.png';
import arrowStart from '../../components/img/Setas/arrowStart.png';
import arrowRigthToBottom from '../../components/img/Setas/arrowRigthToBottom.png';
import arrowStartRigthToTop from '../../components/img/Setas/arrowStartRigthToTop.png';
import arrowLeftToBottom from '../../components/img/Setas/arrowLeftToBottom.png';
import arrowLeftToTop from '../../components/img/Setas/arrowLeftToTop.png';
import arrowStartBottomToLeft from '../../components/img/Setas/arrowStartBottomToLeft.png';
import arrowStartBottomToRight from '../../components/img/Setas/arrowStartBottomToRight.png';
import arrowStartBottom from '../../components/img/Setas/arrowStartBottom.png';

import { Container, TypeObjects, Buttom, Ico  } from './styles';

export default function MenuType(props){

    return(
        <Container>
            <TypeObjects id={props.name} open={props.openTypes}>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={
                        props.name === 'topToright' ? carRed :
                        props.name === 'topToleft'  ? car :
                        props.name === 'top' ? car :
                        props.name === 'rightToDown' ? car :
                        props.name === 'rightTotop' ? car :
                        props.name === 'right' ? car :
                        props.name === 'leftToBottom' ? esquerda :
                        props.name === 'leftToTop' ? esquerda :
                        props.name === 'left' ? esquerda :
                        props.name === 'bottomToLeft' ? esquerda :
                        props.name === 'bottomToRight' ? esquerda :
                        props.name === 'bottom' ? esquerda :
                        props.name === 'bottomToLeft' ? esquerda :
                        props.name === 'semaforo' ? esquerda : ''

                    } alt='' />
                </Buttom>
                <Buttom onClick={props.addObjectArrow}>
                    <Ico id={'arrow' + props.name} src={
                        props.name === 'topToright' ? arrowSideStart :
                        props.name === 'topToleft'  ? arrowStartTopLeft :
                        props.name === 'top' ? arrowStart :
                        props.name === 'rightToDown' ? arrowRigthToBottom :
                        props.name === 'rightTotop' ? arrowStartRigthToTop :
                        props.name === 'right' ? arrowStart :
                        props.name === 'leftToBottom' ? arrowLeftToBottom :
                        props.name === 'leftToTop' ? arrowLeftToTop :
                        props.name === 'left' ? arrowStart :
                        props.name === 'bottomToLeft' ? arrowStartBottomToLeft :
                        props.name === 'bottomToRight' ? arrowStartBottomToRight :
                        props.name === 'bottom' ? arrowStartBottom :
                        props.name === 'bottomToLeft' ? arrowStartBottom :
                        props.name === 'semaforo' ? esquerda : ''
                    } alt='' />
                </Buttom>
                <Buttom style={props.name === 'semaforo' ? {display: 'block'} : {display: 'none'}}>4</Buttom>
            </TypeObjects>
        </Container>
    );
}
