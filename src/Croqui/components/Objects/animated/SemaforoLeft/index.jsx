import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import semLeftGreen from '../../../img/Semaforo/semLeftGreen.png';
import semLeftYellow from '../../../img/Semaforo/semLeftYellow.png';
import semLeftRed from '../../../img/Semaforo/semLeftRed.png';
import close from '../../../img/close.png';
import { Container, Img, Options } from './styles';

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

    return (
        <Container>
            {props.objSemaforoLeft.map((item, index) => {
                if (props.objSemaforoLeft[index] !== '') {
                    return (
                        <ItemDraggable key={index} index={index} object='obj-semaforoLeft' top={item.top} left={item.left} setObjSemaforoLeft={props.setObjSemaforoLeft} objSemaforoLeft={props.objSemaforoLeft}>
                            <Img src={status} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeSemaforoLeft(index, item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }else{
                    return null;
                }
            })}
        </Container>
    );
} 