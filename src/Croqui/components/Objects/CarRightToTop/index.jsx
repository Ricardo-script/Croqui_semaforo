import React from 'react';
import ItemDraggable from '../../ItemDraggable';
import direita from '../../img/direita.png';
import close from '../../img/close.png';
import { Container, MoveRightToTop, Options } from './styles';

export default function CarRightToTop(props){  
    
    return(
        <Container>
            {props.carRightToTop.map((item,index) => {
                if(props.carRightToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carRightToTop' top={item.top} left={item.left} setCarRightToTop={props.setCarRightToTop} carRightToTop={props.carRightToTop}>
                            <MoveRightToTop src={direita} alt="" move={props.moveRightToTop}/>
                            <Options remove={props.remove} onClick={() => props.removeRightToTop(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}