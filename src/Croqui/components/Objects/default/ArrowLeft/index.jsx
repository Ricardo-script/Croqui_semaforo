import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartLeft from '../../../img/Setas/arrowStartLeft.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeft, Options, ButtonSettings } from './styles';

export default function ArrowLeft(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'arrow', title: 'Segue à esquerda', image: arrowStartLeft, object: props.arrowLeft, setObject: props.setArrowLeft});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowLeft.map((item,index) => {
                if(props.arrowLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowLeft' top={item.top} left={item.left} setArrowLeft={props.setArrowLeft} arrowLeft={props.arrowLeft}>
                            <MoveLeft src={arrowStartLeft} alt="" move={props.moveArrowLeft} tamanho={item.tamanho}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowLeft(index,item)}>
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
