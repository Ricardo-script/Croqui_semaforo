import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import semFrontGreen from '../../../img/Semaforo/semFrontGreen.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, Img, Options, ButtonSettings } from './styles';

export default function SemaforoFront(props) {

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'others', title: 'Semaforo frontal', image: semFrontGreen, object: props.objSemaforo, setObject: props.setObjSemaforo});
        props.setOpenSettings(true);
    }

    return (
        <Container>
            {props.objSemaforo.map((item, index) => {
                if (props.objSemaforo[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforo' top={item.top} left={item.left} setObjSemaforo={props.setObjSemaforo} objSemaforo={props.objSemaforo}>
                            <Img src={semFrontGreen} alt="" tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeSemaforo(index, item)}>
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
