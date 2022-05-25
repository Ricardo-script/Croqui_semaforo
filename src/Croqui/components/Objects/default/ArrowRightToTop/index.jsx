import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartRigthToTop from '../../../img/Setas/arrowStartRigthToTop.png';
import close from '../../../img/close.png';
import { Container, MoveRightToTop, Options } from './styles';

export default function ArrowRightToTop(props){  
    
    return(
        <Container>
            {props.arrowRightToTop.map((item,index) => {
                if(props.arrowRightToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowRightToTop' top={item.top} left={item.left} setArrowRightToTop={props.setArrowRightToTop} arrowRightToTop={props.arrowRightToTop}>
                            <MoveRightToTop src={arrowStartRigthToTop} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeArrowRightToTop(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}