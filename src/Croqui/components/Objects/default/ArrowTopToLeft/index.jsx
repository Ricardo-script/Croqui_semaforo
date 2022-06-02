import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartTopLeft from '../../../img/Setas/arrowStartTopLeft.png';
import animateArrowTopToLeft from '../../../img/Setas/animateArrowTopToLeft.gif';
import close from '../../../img/close.png';
import { Container, MoveTopToLeft, Options } from './styles';

export default function ArrowTopToLeft(props){  
    
    return(
        <Container>
            {props.arrowTopToLeft.map((item,index) => {
                if(props.arrowTopToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowTopToLeft' top={item.top} left={item.left} setArrowTopToLeft={props.setArrowTopToLeft} arrowTopToLeft={props.arrowTopToLeft}>
                            <MoveTopToLeft src={props.moveArrowTopToLeft === false ? arrowStartTopLeft : animateArrowTopToLeft} alt=""/>
                            <Options remove={props.remove} onClick={() => props.removeArrowTopToLeft(index,item)}>
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