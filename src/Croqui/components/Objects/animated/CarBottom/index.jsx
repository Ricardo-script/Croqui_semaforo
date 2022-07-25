import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/direita.png';
import carYellow from '../../../img/carYellow.png';
import carGrey from '../../../img/esquerda.png';
import carBlue from '../../../img/carBlue.png';
import carBrown from '../../../img/carBrown.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottom, Options, ButtonSettings } from './styles';

export default function CarBottom(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car', title: 'Carro descendo', image: carRed, object: props.carBottom, setObject: props.setCarBottom });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carBottom.map((item, index) => {
				if (props.carBottom[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carBottom' top={item.top} left={item.left} setCarBottom={props.setCarBottom} carBottom={props.carBottom}>
							<MoveBottom src={
								props.carBottom[index].color === 'red' ? carRed :
									props.carBottom[index].color === 'grey' ? carGrey :
										props.carBottom[index].color === 'yellow' ? carYellow :
											props.carBottom[index].color === 'blue' ? carBlue :
												props.carBottom[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveBottom} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} angulo={item.angulo} />
							<Options remove={props.remove} onClick={() => props.removeCarBottom(index, item)}>
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
