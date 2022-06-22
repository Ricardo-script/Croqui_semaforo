import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowLeftToTop from '../../../img/Setas/arrowLeftToTop.png';
import animateArrowLeftToTop from '../../../img/Setas/animateArrowLeftToTop.gif';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeftToTop, Options, ButtonSettings } from './styles';

export default function ArrowLeftToTop(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'arrow', title: 'À esquerda vira a direita', image: arrowLeftToTop, object: props.arrowLeftToTop, setObject: props.setArrowLeftToTop});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowLeftToTop.map((item,index) => {
                if(props.arrowLeftToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowLeftToTop' top={item.top} left={item.left} setArrowLeftToTop={props.setArrowLeftToTop} arrowLeftToTop={props.arrowLeftToTop}>
                            <MoveLeftToTop src={props.moveArrowLeftToTop === false ? arrowLeftToTop : animateArrowLeftToTop} alt="" tamanho={item.tamanho}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowLeftToTop(index,item)}>
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
