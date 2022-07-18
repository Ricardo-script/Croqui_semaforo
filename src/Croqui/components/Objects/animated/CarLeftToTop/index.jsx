import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeftToTop, Options, ButtonSettings } from './styles';

export default function CarLeftToTop(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro sobe á esquerda', image: esquerda, object: props.carLeftToTop, setObject: props.setCarLeftToTop});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carLeftToTop.map((item,index) => {
                if(props.carLeftToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carLeftToTop' top={item.top} left={item.left} setCarLeftToTop={props.setCarLeftToTop} carLeftToTop={props.carLeftToTop}>
                            <MoveLeftToTop src={esquerda} alt="" move={props.moveLeftToTop}
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
                            <Options remove={props.remove} onClick={() => props.removeLeftToTop(index,item)}>
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
