import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartTop from '../../../img/Setas/arrowStartTop.png';
import close from '../../../img/close.png';
import { Container, MoveTop, Options } from './styles';

export default function ArrowTop(props){  
    
    return(
        <Container>
            {props.arrowTop.map((item,index) => {
                if(props.arrowTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowTop' top={item.top} left={item.left} setArrowTop={props.setArrowTop} arrowTop={props.arrowTop}>
                            <MoveTop src={arrowStartTop} alt="" move={props.moveArrowTop}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowTop(index,item)}>
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