import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartRigthToTop from '../../../img/Setas/arrowStartRigthToTop.png';
import animateArrowRightToTop from '../../../img/Setas/animateArrowRightToTop.gif';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveRightToTop, Options, ButtonSettings } from './styles';

export default function ArrowRightToTop(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'arrow', title: 'Seta subindo vira a esquerda', image: arrowStartRigthToTop, object: props.arrowRightToTop, setObject: props.setArrowRightToTop});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowRightToTop.map((item,index) => {
                if(props.arrowRightToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowRightToTop' top={item.top} left={item.left} setArrowRightToTop={props.setArrowRightToTop} arrowRightToTop={props.arrowRightToTop}>
                            <MoveRightToTop src={props.moveArrowRightToTop === false ? arrowStartRigthToTop : animateArrowRightToTop} alt="" tamanho={item.tamanho}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowRightToTop(index,item)}>
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
