import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/direita.png';
import carYellow from '../../../img/carYellow.png';
import carGrey from '../../../img/esquerda.png';
import carBlue from '../../../img/carBlue.png';
import carBrown from '../../../img/carBrown.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveBottomToLeft, Options, ButtonSettings } from './styles';

export default function CarBottomToLeft(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro descendo vira a esquerda', image: carRed, object: props.carBottomToLeft, setObject: props.setCarBottomToLeft });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carBottomToLeft.map((item, index) => {
				if (props.carBottomToLeft[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carBottomToLeft' top={item.top} left={item.left} setCarBottomToLeft={props.setCarBottomToLeft} carBottomToLeft={props.carBottomToLeft}>
							<MoveBottomToLeft src={
								props.carBottomToLeft[index].color === 'red' ? carRed :
									props.carBottomToLeft[index].color === 'grey' ? carGrey :
										props.carBottomToLeft[index].color === 'yellow' ? carYellow :
											props.carBottomToLeft[index].color === 'blue' ? carBlue :
												props.carBottomToLeft[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveBottomToLeft}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
							/>
							<Options remove={props.remove} onClick={() => props.removeBottomToLeft(index, item)}>
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
