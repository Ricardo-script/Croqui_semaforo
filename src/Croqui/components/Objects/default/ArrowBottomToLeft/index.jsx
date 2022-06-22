import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartBottomToLeft from '../../../img/Setas/arrowStartBottomToLeft.png';
import animateArrowBottomToLeft from '../../../img/Setas/animateArrowBottomToLeft.gif';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottomToLeft, Options, ButtonSettings } from './styles';

export default function ArrowBottomToLeft(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'arrow', title: 'Seta descendo vire à esquerda', image: arrowStartBottomToLeft, object: props.arrowBottomToLeft, setObject: props.setArrowBottomToLeft});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowBottomToLeft.map((item,index) => {
                if(props.arrowBottomToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowBottomToLeft' top={item.top} left={item.left} setArrowBottomToLeft={props.setArrowBottomToLeft} arrowBottomToLeft={props.arrowBottomToLeft}>
                            <MoveBottomToLeft src={props.moveArrowBottomToLeft === false ? arrowStartBottomToLeft : animateArrowBottomToLeft} alt="" tamanho={item.tamanho}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowBottomToLeft(index,item)}>
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
