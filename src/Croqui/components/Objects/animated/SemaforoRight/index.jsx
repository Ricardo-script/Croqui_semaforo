import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import semRightGreen from '../../../img/Semaforo/semRightGreen.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, Img, Options, ButtonSettings } from './styles';

export default function SemaforoRight(props) {

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'others', title: 'Semaforo à direita', image: semRightGreen, object: props.objSemaforoRight, setObject: props.setObjSemaforoRight});
        props.setOpenSettings(true);
    }

    return (
        <Container>
            {props.objSemaforoRight.map((item, index) => {
                if (props.objSemaforoRight[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforoRight' top={item.top} left={item.left} setObjSemaforoRight={props.setObjSemaforoRight} objSemaforoRight={props.objSemaforoRight}>
                            <Img src={semRightGreen} alt="" tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeSemaforoRight(index, item)}>
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
