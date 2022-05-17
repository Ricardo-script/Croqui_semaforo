import React from 'react';
import ItemDraggable from '../../ItemDraggable';
import walkRight from '../../img/walkRight.gif';
import walkPauseRight from '../../img/WalkPauseRight.png';
import close from '../../img/close.png';
import { Container, MoveWalkRight, Options } from './styles';

export default function WalkRight(props){  
    
    return(
        <Container>
            {props.walkRight.map((item,index) => {
                if(props.walkRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkRight' top={item.top} left={item.left} setWalkRight={props.setWalkRight} walkRight={props.walkRight}>
                            <MoveWalkRight src={props.moveWalkRight === true ? walkRight : walkPauseRight } alt="" move={props.moveWalkRight}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkRight(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}