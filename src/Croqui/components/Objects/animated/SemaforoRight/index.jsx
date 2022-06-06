import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import semRightGreen from '../../../img/Semaforo/semRightGreen.png';
import close from '../../../img/close.png';
import { Container, Img, Options } from './styles';

export default function SemaforoRight(props) {

    return (
        <Container>
            {props.objSemaforoRight.map((item, index) => {
                if (props.objSemaforoRight[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforoRight' top={item.top} left={item.left} setObjSemaforoRight={props.setObjSemaforoRight} objSemaforoRight={props.objSemaforoRight}>
                            <Img src={semRightGreen} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeSemaforoRight(index, item)}>
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
