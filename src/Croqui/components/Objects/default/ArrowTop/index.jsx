import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartTop from '../../../img/Setas/arrowStartTop.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTop, Options, ButtonSettings } from './styles';

export default function ArrowTop(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'arrow', title: 'Seta subindo', image: arrowStartTop, object: props.arrowTop, setObject: props.setArrowTop});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowTop.map((item,index) => {
                if(props.arrowTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowTop' top={item.top} left={item.left} setArrowTop={props.setArrowTop} arrowTop={props.arrowTop}>
                            <MoveTop src={arrowStartTop} alt="" move={props.moveArrowTop} tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowTop(index,item)}>
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
