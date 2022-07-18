import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeftToBottom, Options, ButtonSettings } from './styles';

export default function CarLeftToBottom(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({index: index, type: 'car-curve', title: 'Carro desce á esquerda', image: esquerda, object: props.carLeftToBottom, setObject: props.setCarLeftToBottom});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carLeftToBottom.map((item,index) => {
                if(props.carLeftToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carLeftToBottom' top={item.top} left={item.left} setCarLeftToBottom={props.setCarLeftToBottom} carLeftToBottom={props.carLeftToBottom}>
                            <MoveLeftToBottom src={esquerda} alt="" move={props.moveLeftToBottom}
															tamanho={item.tamanho} velocidade={item.velocidade}
															percursoFinal={item.percursoFinal}
															percurso={item.percurso}
															angulo={item.angulo}
															anguloFinal={item.anguloFinal}
															retaX={item.retaX}
															retaY={item.retaY}
															retaFinalX={item.retaFinalX}
															retaFinalY={item.retaFinalY}
															/>
                            <Options remove={props.remove} onClick={() => props.removeLeftToBottom(index,item)}>
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
