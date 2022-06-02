import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowLeftToTop from '../../../img/Setas/arrowLeftToTop.png';
import animateArrowLeftToTop from '../../../img/Setas/animateArrowLeftToTop.gif';
import close from '../../../img/close.png';
import { Container, MoveLeftToTop, Options } from './styles';

export default function ArrowLeftToTop(props){  
    
    return(
        <Container>
            {props.arrowLeftToTop.map((item,index) => {
                if(props.arrowLeftToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowLeftToTop' top={item.top} left={item.left} setArrowLeftToTop={props.setArrowLeftToTop} arrowLeftToTop={props.arrowLeftToTop}>
                            <MoveLeftToTop src={props.moveArrowLeftToTop === false ? arrowLeftToTop : animateArrowLeftToTop} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeArrowLeftToTop(index,item)}>
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