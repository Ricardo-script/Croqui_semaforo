import React from 'react';
import ItemDraggable from '../../ItemDraggable';
import subindo from '../../img/subindo.png';
import close from '../../img/close.png';
import { Container, MoveTopToRight, Options } from './styles';

export default function CarTopToRight(props){  
    
    return(
        <Container>
            {props.carTopToRight.map((item,index) => {
                if(props.carTopToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carTopToRight' top={item.top} left={item.left} setCarTop={props.setCarTopToRight} carTop={props.carTopToRight}>
                            <MoveTopToRight src={subindo} alt="" move={props.moveTopToRight}/>
                            <Options remove={props.remove} onClick={() => props.removeCarTopToRight(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}