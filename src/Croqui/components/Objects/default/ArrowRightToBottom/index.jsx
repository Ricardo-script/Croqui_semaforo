import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowRigthToBottom from '../../../img/Setas/arrowRigthToBottom.png';
import animateArrowRigthToBottom from '../../../img/Setas/animateArrowRigthToBottom.gif';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveRightToBottom, Options, ButtonSettings } from './styles';

export default function ArrowRightToBottom(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'arrow', title: 'À direita vire a direita', image: arrowRigthToBottom, object: props.arrowRightToBottom, setObject: props.setArrowRightToBottom});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowRightToBottom.map((item,index) => {
                if(props.arrowRightToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowRightToBottom' top={item.top} left={item.left} setArrowRightToBottom={props.setArrowRightToBottom} arrowRightToBottom={props.arrowRightToBottom}>
                            <MoveRightToBottom src={props.moveArrowRightToBottom === false ? arrowRigthToBottom : animateArrowRigthToBottom} alt="" tamanho={item.tamanho} />
                            <Options remove={props.remove} onClick={() => props.removeArrowRightToBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
							<ButtonSettings remove={props.remove}>
                                <img src={settings} alt="" onClick={insertConfigModalSettings}/>
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
