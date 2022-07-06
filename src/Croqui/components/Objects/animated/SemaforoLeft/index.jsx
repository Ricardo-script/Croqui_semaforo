import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import semLeftGreen from '../../../img/Semaforo/semLeftGreen.png';
import semLeftYellow from '../../../img/Semaforo/semLeftYellow.png';
import semLeftRed from '../../../img/Semaforo/semLeftRed.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, Img, Options, ButtonSettings } from './styles';

export default function SemaforoLeft(props) {

    const [status, setStatus] = React.useState(semLeftGreen);

    const testeTrocaCor = () => {
        if(status === semLeftGreen){
            setStatus(semLeftYellow);
            return
        }
        if(status === semLeftYellow){
            setStatus(semLeftRed);
            return
        }
        if(status === semLeftRed){
            setStatus(semLeftGreen);
            return
        }
    }

    setTimeout(() => {
        return testeTrocaCor()
    },4000);

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'others', title: 'Semaforo à esquerda', image: semLeftGreen, object: props.objSemaforoLeft, setObject: props.setObjSemaforoLeft});
        props.setOpenSettings(true);
    }

    return (
        <Container>
            {props.objSemaforoLeft.map((item, index) => {
                if (props.objSemaforoLeft[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforoLeft' top={item.top} left={item.left} setObjSemaforoLeft={props.setObjSemaforoLeft} objSemaforoLeft={props.objSemaforoLeft}>
                            <Img src={status} alt="" tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeSemaforoLeft(index, item)}>
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
