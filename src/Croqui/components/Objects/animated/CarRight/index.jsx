import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/carRed - Copia.png';
import carYellow from '../../../img/carYellow - Copia.png';
import carGrey from '../../../img/carGrey - Copia.png';
import carBlue from '../../../img/carBlue - Copia.png';
import carBrown from '../../../img/carBrown - Copia.png';
import motoRed from '../../../img/motoRed - Copia.png';
import busGrey from '../../../img/busGrey.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, Content, MoveRight, Options, ButtonSettings } from './styles';

export default function CarRight(props) {

    const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'car', title: 'Carro horizontal direita', image: carRed , object: props.carRight, setObject: props.setCarRight});
        props.setOpenSettings(true);
    }

    return (
        <Container>
            {props.carRight.map((item, index) => {
                if (props.carRight[index] !== '') {
                    return (
                        <Content key={index}>
                            <ItemDraggable key={index} index={index} object='carRight' top={item.top} left={item.left} setCarRight={props.setCarRight} carRight={props.carRight}>
                                <MoveRight src={
									props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
									props.carRight[index].color === 'red' ? carRed :
									props.carRight[index].color === 'grey' ? carGrey :
									props.carRight[index].color === 'yellow' ?  carYellow :
									props.carRight[index].color === 'blue' ?  carBlue :
									props.carRight[index].color === 'brown' ?  carBrown : ''
								}alt="" move={props.moveRight} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} angulo={item.angulo}
									taxaOcupacao={props.taxaOcupacao} changeCars={props.changeCars}
								/>
                                <Options remove={props.remove} onClick={() => props.removeCarRight(index, item)}>
                                    <img src={close} alt="" />
                                </Options>
                                <ButtonSettings remove={props.remove}>
                                    <img src={settings} alt="" onClick={() => insertConfigModalSettings(index)}/>
                                </ButtonSettings>
                            </ItemDraggable>
                        </Content>
                    )
                }else{
                    return '';
                }
            })}
        </Container>
    );
}
