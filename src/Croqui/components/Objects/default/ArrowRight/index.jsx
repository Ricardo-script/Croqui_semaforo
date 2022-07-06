import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStart from '../../../img/Setas/arrowStart.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveRight, Options, ButtonSettings } from './styles';

export default function ArrowRight(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'arrow', title: 'Segue a direita', image: arrowStart, object: props.arrowRight, setObject: props.setArrowRight});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.arrowRight.map((item,index) => {
                if(props.arrowRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowRight' top={item.top} left={item.left} setArrowRight={props.setArrowRight} arrowRight={props.arrowRight}>
                            <MoveRight src={arrowStart} alt="" move={props.moveArrowRight} tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowRight(index,item)}>
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
