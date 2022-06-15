import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import descendo from '../../../img/descendo.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottomToRight, Options, ButtonSettings } from './styles';

export default function CarBottomToRight(props){  
    
    return(
        <Container>
            {props.carBottomToRight.map((item,index) => {
                if(props.carBottomToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carBottomToRight' top={item.top} left={item.left} setCarBottomToRight={props.setCarBottomToRight} carBottomToRight={props.carBottomToRight}>
                            <MoveBottomToRight src={descendo} alt="" move={props.moveBottomToRight}/>
                            <Options remove={props.remove} onClick={() => props.removeBottomToRight(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                            <ButtonSettings remove={props.remove}>
                                <img src={settings} alt=""/>
                            </ButtonSettings>
                        </ItemDraggable>
                    );
                }else{
                    return null;
                }
            })}
        </Container>
    );
}