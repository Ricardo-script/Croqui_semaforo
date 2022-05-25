import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import direita from '../../../img/direita.png';
import close from '../../../img/close.png';
import { Container, MoveRight, Options, Arrow } from './styles';

export default function CarRight(props){

    return(
        <Container>
            {props.carRight.map((item,index) => {
                if(props.carRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carRight' top={item.top} left={item.left} setCarRight={props.setCarRight} carRight={props.carRight}>
                            <MoveRight src={direita} alt="" move={props.moveRight}/>
                            <Options remove={props.remove} onClick={() => props.removeCarRight(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    )
                }
            })}
        </Container>
    );
}