import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import descendo from '../../../img/descendo.png';
import close from '../../../img/close.png';
import { Container, MoveBottomToLeft, Options } from './styles';

export default function CarBottomToLeft(props){  
    
    return(
        <Container>
            {props.carBottomToLeft.map((item,index) => {
                if(props.carBottomToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carBottomToLeft' top={item.top} left={item.left} setCarBottomToLeft={props.setCarBottomToLeft} carBottomToLeft={props.carBottomToLeft}>
                            <MoveBottomToLeft src={descendo} alt="" move={props.moveBottomToLeft}/>
                            <Options remove={props.remove} onClick={() => props.removeBottomToLeft(index,item)}>
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