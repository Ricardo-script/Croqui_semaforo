import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import walkBottom from '../../../img/walkBottom.gif';
import walkPauseBottom from '../../../img/WalkPauseBottom.png';
import close from '../../../img/close.png';
import { Container, MoveWalkBottom, Options } from './styles';

export default function WalkBottom(props){  
    
    return(
        <Container>
            {props.walkBottom.map((item,index) => {
                if(props.walkBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkBottom' top={item.top} left={item.left} setWalkBottom={props.setWalkBottom} walkBottom={props.walkBottom}>
                            <MoveWalkBottom src={props.moveWalkBottom === true ? walkBottom : walkPauseBottom} alt="" move={props.moveWalkBottom}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }else{
                    return '';
                }
            })}
        </Container>
    );
}