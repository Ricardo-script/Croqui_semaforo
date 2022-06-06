import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import semFrontGreen from '../../../img/Semaforo/semFrontGreen.png';
import close from '../../../img/close.png';
import { Container, Img, Options } from './styles';

export default function SemaforoFront(props) {

    return (
        <Container>
            {props.objSemaforo.map((item, index) => {
                if (props.objSemaforo[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforo' top={item.top} left={item.left} setObjSemaforo={props.setObjSemaforo} objSemaforo={props.objSemaforo}>
                            <Img src={semFrontGreen} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeSemaforo(index, item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }else{
                    return null;
                }
            })}
        </Container>
    );
} 