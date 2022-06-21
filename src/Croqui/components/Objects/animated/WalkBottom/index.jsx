import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import walkBottom from '../../../img/walkBottom.gif';
import walkPauseBottom from '../../../img/WalkPauseBottom.png';
import settings from '../../../img/tool.png';
import close from '../../../img/close.png';
import { Container, MoveWalkBottom, Options, ButtonSettings } from './styles';

export default function WalkBottom(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'pedestre', title: 'Pedestre descendo', image: walkPauseBottom, object: props.walkBottom, setObject: props.setWalkBottom});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.walkBottom.map((item,index) => {
                if(props.walkBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkBottom' top={item.top} left={item.left} setWalkBottom={props.setWalkBottom} walkBottom={props.walkBottom}>
                            <MoveWalkBottom src={props.moveWalkBottom === true ? walkBottom : walkPauseBottom} alt="" move={props.moveWalkBottom} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkBottom(index,item)}>
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
