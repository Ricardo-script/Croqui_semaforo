import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowLeftToBottom from '../../../img/Setas/arrowLeftToBottom.png';
import animateArrowLeftToBottom from '../../../img/Setas/animateArrowLeftToBottom.gif';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeftToBottom, Options, ButtonSettings } from './styles';

export default function ArrowLeftToBottom(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'arrow', title: 'Seta subindo vira a esquerda', image: arrowLeftToBottom, object: props.arrowLeftToBottom, setObject: props.setArrowLeftToBottom});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowLeftToBottom.map((item,index) => {
                if(props.arrowLeftToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowLeftToBottom' top={item.top} left={item.left} setArrowLeftToBottom={props.setArrowLeftToBottom} arrowLeftToBottom={props.arrowLeftToBottom}>
                            <MoveLeftToBottom src={props.moveArrowLeftToBottom === false ? arrowLeftToBottom : animateArrowLeftToBottom} alt="" tamanho={item.tamanho} />
                            <Options remove={props.remove} onClick={() => props.removeArrowLeftToBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
							<ButtonSettings remove={props.remove}>
                                <img src={settings} alt="" onClick={() => insertConfigModalSettings(index)}/>
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
