import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import { Container, MoveLeft, Options } from './styles';

export default function CarLeft(props){

    return(
        <Container>
            {props.carLeft.map((item,index) => {
                if(props.carLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carLeft' top={item.top} left={item.left} setCarLeft={props.setCarLeft} carLeft={props.carLeft}>
                            <MoveLeft src={esquerda} alt="" move={props.moveLeft}/>
                            <Options remove={props.remove} onClick={() => props.removeCarLeft(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    )
                }
            })}
        </Container>
    );
}