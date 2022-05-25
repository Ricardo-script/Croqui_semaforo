import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowSideStart from '../../../img/Setas/arrowSideStart.png';
import close from '../../../img/close.png';
import { Container, MoveTopToRight, Options } from './styles';

export default function ArrowTopToRight(props){  
    
    return(
        <Container>
            {props.arrowTopToRight.map((item,index) => {
                if(props.arrowTopToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowTopToRight' top={item.top} left={item.left} setArrowTopToRight={props.setArrowTopToRight} arrowTopToRight={props.arrowTopToRight}>
                            <MoveTopToRight src={arrowSideStart} alt="" move={props.moveTopToRight}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowTopToRight(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}