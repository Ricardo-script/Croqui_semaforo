import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeft, Options, ButtonSettings } from './styles';

export default function CarLeft(props) {

	const insertConfigModalSettings = () => {
		props.setPropsSettings({ type: 'car',  title: 'Carro horizontal esquerda', image: esquerda, object: props.carLeft, setObject: props.setCarLeft });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carLeft.map((item, index) => {
				if (props.carLeft[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carLeft' top={item.top} left={item.left} setCarLeft={props.setCarLeft} carLeft={props.carLeft}>
							<MoveLeft src={esquerda} alt="" move={props.moveLeft} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} />
							<Options remove={props.remove} onClick={() => props.removeCarLeft(index, item)}>
								<img src={close} alt="" />
							</Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={insertConfigModalSettings} />
							</ButtonSettings>
						</ItemDraggable>
					)
				} else {
					return null;
				}
			})}
		</Container>
	);
}
