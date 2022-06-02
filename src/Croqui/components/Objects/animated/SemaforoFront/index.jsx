import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import traffic from '../../../img/traffic.png';
import semFront from '../../../img/Semaforo/semFront.png';
import semLeft from '../../../img/Semaforo/semLeft.png';
import semRight from '../../../img/Semaforo/semRight.png';
import close from '../../../img/close.png';
import { Container, Img, Options } from './styles';

export default function SemaforoFront(props) {

    return (
        <Container>
            {props.objSemaforo.map((item, index) => {
                if (props.objSemaforo[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforo' top={item.top} left={item.left} setObjSemaforo={props.setObjSemaforo} objSemaforo={props.objSemaforo}>
                            <Img src={semFront} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeSemaforo(index, item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
} 