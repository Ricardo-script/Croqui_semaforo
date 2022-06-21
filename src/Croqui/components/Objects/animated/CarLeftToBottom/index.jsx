import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeftToBottom, Options, ButtonSettings } from './styles';

export default function CarLeftToBottom(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'car', title: 'Carro desce á esquerda', image: esquerda, object: props.carLeftToBottom, setObject: props.setCarLeftToBottom});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carLeftToBottom.map((item,index) => {
                if(props.carLeftToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carLeftToBottom' top={item.top} left={item.left} setCarLeftToBottom={props.setCarLeftToBottom} carLeftToBottom={props.carLeftToBottom}>
                            <MoveLeftToBottom src={esquerda} alt="" move={props.moveLeftToBottom} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeLeftToBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={insertConfigModalSettings}/>
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
