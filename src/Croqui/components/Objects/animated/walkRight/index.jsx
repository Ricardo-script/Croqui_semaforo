import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import walkRight from '../../../img/walkRight.gif';
import walkPauseRight from '../../../img/WalkPauseRight.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveWalkRight, Options, ButtonSettings } from './styles';

export default function WalkRight(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'pedestre', title: 'Pedestre à direita', image: walkPauseRight, object: props.walkRight, setObject: props.setWalkRight});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.walkRight.map((item,index) => {
                if(props.walkRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkRight' top={item.top} left={item.left} setWalkRight={props.setWalkRight} walkRight={props.walkRight}>
                            <MoveWalkRight src={props.moveWalkRight === true ? walkRight : walkPauseRight } alt="" move={props.moveWalkRight} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkRight(index,item)}>
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
