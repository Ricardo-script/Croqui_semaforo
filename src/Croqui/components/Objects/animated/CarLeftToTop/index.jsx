import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import { Container, MoveLeftToTop, Options } from './styles';

export default function CarLeftToTop(props){  
    
    return(
        <Container>
            {props.carLeftToTop.map((item,index) => {
                if(props.carLeftToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carLeftToTop' top={item.top} left={item.left} setCarLeftToTop={props.setCarLeftToTop} carLeftToTop={props.carLeftToTop}>
                            <MoveLeftToTop src={esquerda} alt="" move={props.moveLeftToTop}/>
                            <Options remove={props.remove} onClick={() => props.removeLeftToTop(index,item)}>
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