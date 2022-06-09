import React, { useState } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import direita from '../../../img/direita.png';
import close from '../../../img/close.png';
import settings from '../../../img/settings.png';
import { Container, Content, MoveRight, Options, ButtonSettings } from './styles';
import Settings from '../../../settings';

export default function CarRight(props) {

    const [openSettings, setOpenSettings] = useState(false);

    const menuSettings = () => {
        if(openSettings){
            setOpenSettings(false);
        }else{
             setOpenSettings(true);
        }
    }

    return (
        <Container>
            {props.carRight.map((item, index) => {
                if (props.carRight[index] !== '') {
                    return (
                        <Content>
                            <ItemDraggable key={index} index={index} object='carRight' top={item.top} left={item.left} setCarRight={props.setCarRight} carRight={props.carRight}>
                                <MoveRight src={direita} alt="" move={props.moveRight} />
                                <Options remove={props.remove} onClick={() => props.removeCarRight(index, item)}>
                                    <img src={close} alt="" />
                                </Options>
                                <ButtonSettings remove={props.remove}>
                                    <img src={settings} alt="" onClick={menuSettings}/>
                                </ButtonSettings>
                            </ItemDraggable>
                            <Settings open={openSettings}/>
                        </Content>
                    )
                }else{
                    return '';
                }
            })}
        </Container>
    );
}