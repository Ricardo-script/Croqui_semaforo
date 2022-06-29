import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import walkLeft from '../../../img/walkLeft.gif';
import walkPauseLeft from '../../../img/WalkPauseLeft.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveWalkLeft, Options, ButtonSettings } from './styles';

export default function WalkLeft(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'pedestre', title: 'Pedestre à esquerda', image: walkPauseLeft, object: props.walkLeft, setObject: props.setWalkLeft});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.walkLeft.map((item,index) => {
                if(props.walkLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkLeft' top={item.top} left={item.left} setWalkLeft={props.setWalkLeft} walkLeft={props.walkLeft}>
                            <MoveWalkLeft src={props.moveWalkLeft === true ? walkLeft : walkPauseLeft} alt="" move={props.moveWalkLeft} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkLeft(index,item)}>
                                <img src={close} alt="" />
                            </Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={() => insertConfigModalSettings(index)}/>
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
