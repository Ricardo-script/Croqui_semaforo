import React from 'react';
import ItemDraggable from '../../ItemDraggable';
import subindo from '../../img/subindo.png';
import close from '../../img/close.png';
import { Container, MoveTopToLeft, Options } from './styles';

export default function CarTopToLeft(props){  
    
    return(
        <Container>
            {props.carTopToLeft.map((item,index) => {
                if(props.carTopToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carTopToLeft' top={item.top} left={item.left} setCarTop={props.setCarTopToLeft} carTop={props.carTopToLeft}>
                            <MoveTopToLeft src={subindo} alt="" move={props.moveTopToLeft}/>
                            <Options remove={props.remove} onClick={() => props.removeCarTopToLeft(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}