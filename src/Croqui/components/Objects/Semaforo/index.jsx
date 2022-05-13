import React, { useState } from 'react';
import ItemDraggable from '../../ItemDraggable';
import semaforo from '../../img/semaforo.png';
import close from '../../img/close.png';
import { Container, Img, Options } from './styles';

export default function Semaforo(props) {

    return (
        <Container>
            {props.objSemaforo.map((item, index) => {
                if (props.objSemaforo[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforo' top={item.top} left={item.left} setObjSemaforo={props.setObjSemaforo} objSemaforo={props.objSemaforo}>
                            <Img src={semaforo} alt="" />
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