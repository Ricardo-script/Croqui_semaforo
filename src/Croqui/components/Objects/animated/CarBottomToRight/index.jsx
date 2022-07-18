import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import descendo from '../../../img/descendo.png';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottomToRight, Options, ButtonSettings } from './styles';

export default function CarBottomToRight(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({index: index, type: 'car-curve', title: 'Carro descendo vira a direita', image: esquerda, object: props.carBottomToRight, setObject: props.setCarBottomToRight});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carBottomToRight.map((item,index) => {
                if(props.carBottomToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carBottomToRight' top={item.top} left={item.left} setCarBottomToRight={props.setCarBottomToRight} carBottomToRight={props.carBottomToRight}>
                            <MoveBottomToRight src={descendo} alt="" move={props.moveBottomToRight}
															tamanho={item.tamanho} velocidade={item.velocidade}
															percursoFinal={item.percursoFinal}
															percurso={item.percurso}
															angulo={item.angulo}
															anguloFinal={item.anguloFinal}
															/>
                            <Options remove={props.remove} onClick={() => props.removeBottomToRight(index,item)}>
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
