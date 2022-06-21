import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import direita from '../../../img/direita.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveRightToBottom, Options, ButtonSettings } from './styles';

export default function CarRightToBottom(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'car', title: 'Carro desce a direita', image: direita, object: props.carRightToBottom, setObject: props.setCarRightToBottom});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carRightToBottom.map((item,index) => {
                if(props.carRightToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carRightToBottom' top={item.top} left={item.left} setCarRightToBottom={props.setCarRightToBottom} carRightToBottom={props.carRightToBottom}>
                            <MoveRightToBottom src={direita} alt="" move={props.moveRightToBottom} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeRightToBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={insertConfigModalSettings}/>
							</ButtonSettings>
                        </ItemDraggable>
                    );
                }else{
                    return '';
                }
            })}
        </Container>
    );
}
