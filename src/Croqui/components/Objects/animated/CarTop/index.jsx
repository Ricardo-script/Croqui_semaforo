import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import subindo from '../../../img/subindo.png';
import close from '../../../img/close.png';
import { Container, MoveTop, Options } from './styles';

export default function CarTop(props){  
    
    return(
        <Container>
            {props.carTop.map((item,index) => {
                if(props.carTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carTop' top={item.top} left={item.left} setCarTop={props.setCarTop} carTop={props.carTop}>
                            <MoveTop src={subindo} alt="" move={props.moveTop}/>
                            <Options remove={props.remove} onClick={() => props.removeCarTop(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}