import React, { useState } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeft, Options, ButtonSettings } from './styles';
import Settings from '../../../settings';

export default function CarLeft(props){

    const [openSettings, setOpenSettings] = useState(false);

    return(
        <Container>
            {props.carLeft.map((item,index) => {
                if(props.carLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carLeft' top={item.top} left={item.left} setCarLeft={props.setCarLeft} carLeft={props.carLeft}>
                            <MoveLeft src={esquerda} alt="" move={props.moveLeft}/>
                            <Options remove={props.remove} onClick={() => props.removeCarLeft(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                            <ButtonSettings remove={props.remove}>
                                <img src={settings} alt="" onClick={()=> setOpenSettings(true)}/>
                            </ButtonSettings>
                        </ItemDraggable>
                    )
                }else{
                    return null;
                }
            })}
            <Settings title="Carro sentido á esquerda" open={openSettings} close={setOpenSettings} imgObject={esquerda} object={props.carLeft} setObject={props.setCarLeft} />
        </Container>
    );
}