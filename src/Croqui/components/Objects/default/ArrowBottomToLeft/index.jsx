import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartBottomToLeft from '../../../img/Setas/arrowStartBottomToLeft.png';
import animateArrowBottomToLeft from '../../../img/Setas/animateArrowBottomToLeft.gif';
import close from '../../../img/close.png';
import { Container, MoveBottomToLeft, Options } from './styles';

export default function ArrowBottomToLeft(props){  
    
    return(
        <Container>
            {props.arrowBottomToLeft.map((item,index) => {
                if(props.arrowBottomToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowBottomToLeft' top={item.top} left={item.left} setArrowBottomToLeft={props.setArrowBottomToLeft} arrowBottomToLeft={props.arrowBottomToLeft}>
                            <MoveBottomToLeft src={props.moveArrowBottomToLeft === false ? arrowStartBottomToLeft : animateArrowBottomToLeft} alt=""/>
                            <Options remove={props.remove} onClick={() => props.removeArrowBottomToLeft(index,item)}>
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