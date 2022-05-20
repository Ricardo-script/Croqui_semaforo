import React from 'react';
import ItemDraggable from '../../ItemDraggable';
import walkTop from '../../img/walkTop.gif';
import walkPauseTop from '../../img/WalkPauseTop.png';
import close from '../../img/close.png';
import { Container, MoveWalkTop, Options } from './styles';

export default function WalkTop(props){  
    
    return(
        <Container>
            {props.walkTop.map((item,index) => {
                if(props.walkTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkTop' top={item.top} left={item.left} setWalkTop={props.setWalkTop} walkTop={props.walkTop}>
                            <MoveWalkTop src={props.moveWalkTop === true ? walkTop : walkPauseTop} alt="" move={props.moveWalkTop}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkTop(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}