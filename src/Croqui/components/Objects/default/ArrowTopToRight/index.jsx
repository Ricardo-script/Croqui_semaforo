import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import animateArrowTopToRight from '../../../img/Setas/animateArrowTopToRight.gif';
import arrowSideStart from '../../../img/Setas/arrowSideStart.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTopToRight, Options, ButtonSettings } from './styles';

export default function ArrowTopToRight(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'arrow', title: 'Seta subindo vira a direita', image: arrowSideStart, object: props.arrowTopToRight, setObject: props.setArrowTopToRight});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowTopToRight.map((item,index) => {
                if(props.arrowTopToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowTopToRight' top={item.top} left={item.left} setArrowTopToRight={props.setArrowTopToRight} arrowTopToRight={props.arrowTopToRight}>
                            <MoveTopToRight src={props.moveArrowTopToRight === false ? arrowSideStart : animateArrowTopToRight} alt="" tamanho={item.tamanho}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowTopToRight(index,item)}>
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
