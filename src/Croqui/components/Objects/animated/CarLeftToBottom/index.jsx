import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/direita.png';
import carYellow from '../../../img/carYellow.png';
import carGrey from '../../../img/esquerda.png';
import carBlue from '../../../img/carBlue.png';
import carBrown from '../../../img/carBrown.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveLeftToBottom, Options, ButtonSettings } from './styles';

export default function CarLeftToBottom(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro desce á esquerda', image: carRed, object: props.carLeftToBottom, setObject: props.setCarLeftToBottom });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carLeftToBottom.map((item, index) => {
				if (props.carLeftToBottom[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carLeftToBottom' top={item.top} left={item.left} setCarLeftToBottom={props.setCarLeftToBottom} carLeftToBottom={props.carLeftToBottom}>
							<MoveLeftToBottom src={
								props.carLeftToBottom[index].color === 'red' ? carRed :
									props.carLeftToBottom[index].color === 'grey' ? carGrey :
										props.carLeftToBottom[index].color === 'yellow' ? carYellow :
											props.carLeftToBottom[index].color === 'blue' ? carBlue :
												props.carLeftToBottom[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveLeftToBottom}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
							/>
							<Options remove={props.remove} onClick={() => props.removeLeftToBottom(index, item)}>
								<img src={close} alt="" />
							</Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={() => insertConfigModalSettings(index)} />
							</ButtonSettings>
						</ItemDraggable>
					);
				} else {
					return null;
				}
			})}
		</Container>
	);
}
