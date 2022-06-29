import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartBottom from '../../../img/Setas/arrowStartBottom.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottom, Options, ButtonSettings } from './styles';

export default function ArrowBottom(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'arrow', title: 'Seta descendo', image: arrowStartBottom, object: props.arrowBottom, setObject: props.setArrowBottom});
        props.setOpenSettings(true);
    }


    return(
        <Container>
            {props.arrowBottom.map((item,index) => {
                if(props.arrowBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowBottom' top={item.top} left={item.left} setArrowBottom={props.setArrowBottom} arrowBottom={props.arrowBottom}>
                            <MoveBottom src={arrowStartBottom} alt="" move={props.moveArrowBottom} tamanho={item.tamanho}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowBottom(index,item)}>
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
