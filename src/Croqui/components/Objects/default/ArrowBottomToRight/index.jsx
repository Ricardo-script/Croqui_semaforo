import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartBottomToRight from '../../../img/Setas/arrowStartBottomToRight.png';
import animateArrowBottomToRight from '../../../img/Setas/animateArrowBottomToRight.gif';
import close from '../../../img/close.png';
import { Container, MoveBottomToRight, Options } from './styles';

export default function ArrowBottomToRight(props){  
    
    return(
        <Container>
            {props.arrowBottomToRight.map((item,index) => {
                if(props.arrowBottomToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowBottomToRight' top={item.top} left={item.left} setArrowBottomToRight={props.setArrowBottomToRight} arrowBottomToRight={props.arrowBottomToRight}>
                            <MoveBottomToRight src={props.moveArrowBottomToRight === false ? arrowStartBottomToRight : animateArrowBottomToRight} alt=""/>
                            <Options remove={props.remove} onClick={() => props.removeArrowBottomToRight(index,item)}>
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