import React, { useState } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import close from '../../../img/close.png';
import icoPlug from '../../../img/plug.png';
import settings from '../../../img/tool.png';
import click from '../../../img/click.mp3';
import { Container, Img, Options, ButtonSettings } from './styles';

export default function Plug(props){

    const [total, setTotal] = useState(3);

   setTimeout(() => {
        if(total === 3){
            setTotal(1);
            return;
        }
        if(total === 1){
            setTotal(2);
            return;
        }
        if(total === 2){
            setTotal(3);
            return;
        }
    },3000);

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'box', title: 'Plug', image: icoPlug, object: props.objPlug, setObject: props.setObjPlug});
        props.setOpenSettings(true);
    }

	const acionarPlug = () => {
		const som = new Audio(click);
		som.play();
	}

    return(
        <Container>
            {props.objPlug.map((item,index) => {
                if(props.objPlug[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='objPlug' top={item.top} left={item.left} setObjPlug={props.setObjPlug} objPlug={props.objPlug}>
                            <Img src={icoPlug} alt="" onDoubleClick={acionarPlug} tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removePlug(index,item)}>
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
