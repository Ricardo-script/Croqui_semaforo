import React, { useState } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import direita from '../../../img/direita.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, Content, MoveRight, Options, ButtonSettings } from './styles';
import Settings from '../../../settings';

export default function CarRight(props) {
    
    const [openSettings, setOpenSettings] = useState(false);
 
    return (
        <Container>
            {props.carRight.map((item, index) => {
                if (props.carRight[index] !== '') {
                    return (
                        <Content key={index}>
                            <ItemDraggable key={index} index={index} object='carRight' top={item.top} left={item.left} setCarRight={props.setCarRight} carRight={props.carRight}>
                                <MoveRight src={direita} alt="" move={props.moveRight} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                                <Options remove={props.remove} onClick={() => props.removeCarRight(index, item)}>
                                    <img src={close} alt="" />
                                </Options>
                                <ButtonSettings remove={props.remove}>
                                    <img src={settings} alt="" onClick={()=> setOpenSettings(true)}/>
                                </ButtonSettings>
                            </ItemDraggable>
                        </Content>
                    )
                }else{
                    return '';
                }
            })}
            <Settings title="Carro sentido á direita" open={openSettings} close={setOpenSettings} imgObject={direita} object={props.carRight} setObject={props.setCarRight} />
        </Container>
    );
}