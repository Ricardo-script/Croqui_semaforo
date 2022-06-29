import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartBottomToRight from '../../../img/Setas/arrowStartBottomToRight.png';
import animateArrowBottomToRight from '../../../img/Setas/animateArrowBottomToRight.gif';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottomToRight, Options, ButtonSettings } from './styles';

export default function ArrowBottomToRight(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'arrow', title: 'Seta descendo vira à direita', image: arrowStartBottomToRight, object: props.arrowBottomToRight, setObject: props.setArrowBottomToRight});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowBottomToRight.map((item,index) => {
                if(props.arrowBottomToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowBottomToRight' top={item.top} left={item.left} setArrowBottomToRight={props.setArrowBottomToRight} arrowBottomToRight={props.arrowBottomToRight}>
                            <MoveBottomToRight src={props.moveArrowBottomToRight === false ? arrowStartBottomToRight : animateArrowBottomToRight} alt="" tamanho={item.tamanho}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowBottomToRight(index,item)}>
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
