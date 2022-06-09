import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartBottom from '../../../img/Setas/arrowStartBottom.png';
import close from '../../../img/close.png';
import { Container, MoveBottom, Options } from './styles';

export default function ArrowBottom(props){  
    
    return(
        <Container>
            {props.arrowBottom.map((item,index) => {
                if(props.arrowBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowBottom' top={item.top} left={item.left} setArrowBottom={props.setArrowBottom} arrowBottom={props.arrowBottom}>
                            <MoveBottom src={arrowStartBottom} alt="" move={props.moveArrowBottom}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowBottom(index,item)}>
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
