import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import descendo from '../../../img/descendo.png';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottomToLeft, Options, ButtonSettings } from './styles';

export default function CarBottomToLeft(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro descendo vira a esquerda', image: esquerda, object: props.carBottomToLeft, setObject: props.setCarBottomToLeft});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carBottomToLeft.map((item,index) => {
                if(props.carBottomToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carBottomToLeft' top={item.top} left={item.left} setCarBottomToLeft={props.setCarBottomToLeft} carBottomToLeft={props.carBottomToLeft}>
                            <MoveBottomToLeft src={descendo} alt="" move={props.moveBottomToLeft} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeBottomToLeft(index,item)}>
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
