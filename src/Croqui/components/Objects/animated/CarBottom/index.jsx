import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import descendo from '../../../img/descendo.png';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottom, Options, ButtonSettings } from './styles';

export default function CarBottom(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({index: index, type: 'car', title: 'Carro descendo', image: esquerda, object: props.carBottom, setObject: props.setCarBottom});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carBottom.map((item,index) => {
                if(props.carBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carBottom' top={item.top} left={item.left} setCarBottom={props.setCarBottom} carBottom={props.carBottom}>
                            <MoveBottom src={descendo} alt="" move={props.moveBottom} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeCarBottom(index,item)}>
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
