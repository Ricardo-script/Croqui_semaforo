import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStart from '../../../img/Setas/arrowStart.png';
import close from '../../../img/close.png';
import { Container, MoveTop, Options } from './styles';

export default function ArrowTop(props){  
    
    return(
        <Container>
            {props.arrowRight.map((item,index) => {
                if(props.arrowRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowRight' top={item.top} left={item.left} setArrowRight={props.setArrowRight} arrowRight={props.arrowRight}>
                            <MoveTop src={arrowStart} alt="" move={props.moveArrowRight}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowRight(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}