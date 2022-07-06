import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import botoeira from '../../../img/botoeira.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import audioBotoeira from '../../../img/audioBotoeira.mp3';
import { Container, Img, Options, ButtonSettings } from './styles';

export default function Botoeira(props){

	const acionarBotoeira = () => {
		const audio = new Audio(audioBotoeira);
		audio.play();
	}

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'others', title: 'Botoeira', image: botoeira, object: props.objBotoeira, setObject: props.setObjBotoeira});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.objBotoeira.map((item,index) => {
                if(props.objBotoeira[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='objBotoeira' top={item.top} left={item.left} setObjBotoeira={props.setObjBotoeira} objBotoeira={props.objBotoeira}>
                            <Img src={botoeira} alt="" onDoubleClick={acionarBotoeira} tamanho={item.tamanho} angulo={item.angulo}/>
                            <Options remove={props.remove} onClick={() => props.removeBotoeira(index,item)}>
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

