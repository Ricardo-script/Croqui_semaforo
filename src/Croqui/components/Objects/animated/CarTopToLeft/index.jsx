import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/direita.png';
import carYellow from '../../../img/carYellow.png';
import carGrey from '../../../img/esquerda.png';
import carBlue from '../../../img/carBlue.png';
import carBrown from '../../../img/carBrown.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTopToLeft, Options, ButtonSettings } from './styles';

export default function CarTopToLeft(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro subindo vira a esquerda', image: carRed, object: props.carTopToLeft, setObject: props.setCarTopToLeft });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carTopToLeft.map((item, index) => {
				if (props.carTopToLeft[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carTopToLeft' top={item.top} left={item.left} setCarTopToLeft={props.setCarTopToLeft} carTopToLeft={props.carTopToLeft}>
							<MoveTopToLeft src={
								props.carTopToLeft[index].color === 'red' ? carRed :
									props.carTopToLeft[index].color === 'grey' ? carGrey :
										props.carTopToLeft[index].color === 'yellow' ? carYellow :
											props.carTopToLeft[index].color === 'blue' ? carBlue :
												props.carTopToLeft[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveTopToLeft}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
							/>
							<Options remove={props.remove} onClick={() => props.removeCarTopToLeft(index, item)}>
								<img src={close} alt="" />
							</Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={() => insertConfigModalSettings(index)} />
							</ButtonSettings>
						</ItemDraggable>
					);
				} else {
					return '';
				}
			})}
		</Container>
	);
}
