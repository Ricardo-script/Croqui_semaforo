import React from 'react';
import ItemDraggable from '../../ItemDraggable';
import walkLeft from '../../img/walkLeft.gif';
import walkPauseLeft from '../../img/WalkPauseLeft.png';
import close from '../../img/close.png';
import { Container, MoveWalkLeft, Options } from './styles';

export default function WalkLeft(props){  
    
    return(
        <Container>
            {props.walkLeft.map((item,index) => {
                if(props.walkLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkLeft' top={item.top} left={item.left} setWalkLeft={props.setWalkLeft} walkLeft={props.walkLeft}>
                            <MoveWalkLeft src={props.moveWalkLeft === true ? walkLeft : walkPauseLeft} alt="" move={props.moveWalkLeft}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkLeft(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}