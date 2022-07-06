import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartTopLeft from '../../../img/Setas/arrowStartTopLeft.png';
import animateArrowTopToLeft from '../../../img/Setas/animateArrowTopToLeft.gif';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTopToLeft, Options, ButtonSettings } from './styles';

export default function ArrowTopToLeft(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'arrow', title: 'Seta subindo vira a esquerda', image: arrowStartTopLeft, object: props.arrowTopToLeft, setObject: props.setArrowTopToLeft});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowTopToLeft.map((item,index) => {
                if(props.arrowTopToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowTopToLeft' top={item.top} left={item.left} setArrowTopToLeft={props.setArrowTopToLeft} arrowTopToLeft={props.arrowTopToLeft}>
                            <MoveTopToLeft src={props.moveArrowTopToLeft === false ? arrowStartTopLeft : animateArrowTopToLeft} alt="" tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowTopToLeft(index,item)}>
                                <img src={close} alt="" onClick={insertConfigModalSettings}/>
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
