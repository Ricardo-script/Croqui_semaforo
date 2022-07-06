import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import walkTop from '../../../img/walkTop.gif';
import walkPauseTop from '../../../img/WalkPauseTop.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveWalkTop, Options, ButtonSettings } from './styles';

export default function WalkTop(props){

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({index: index, type: 'pedestre', title: 'Pedestre subindo', image: walkPauseTop, object: props.walkTop, setObject: props.setWalkTop});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.walkTop.map((item,index) => {
                if(props.walkTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='walkTop' top={item.top} left={item.left} setWalkTop={props.setWalkTop} walkTop={props.walkTop}>
                            <MoveWalkTop src={props.moveWalkTop === true ? walkTop : walkPauseTop} alt="" move={props.moveWalkTop} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeWalkTop(index,item)}>
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
