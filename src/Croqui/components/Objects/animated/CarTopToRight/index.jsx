import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/carRed - Copia.png';
import carYellow from '../../../img/carYellow - Copia.png';
import carGrey from '../../../img/carGrey - Copia.png';
import carBlue from '../../../img/carBlue - Copia.png';
import carBrown from '../../../img/carBrown - Copia.png';
import motoRed from '../../../img/motoRed - Copia.png';
import busGrey from '../../../img/busGrey.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTopToRight, Options, ButtonSettings } from './styles';

export default function CarTopToRight(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro subindo vira a direita', image: carRed, object: props.carTopToRight, setObject: props.setCarTopToRight });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carTopToRight.map((item, index) => {
				if (props.carTopToRight[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carTopToRight' top={item.top} left={item.left} setCarTopToRight={props.setCarTopToRight} carTopToRight={props.carTopToRight}>
							<MoveTopToRight src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
										props.carTopToRight[index].color === 'red' ? carRed :
											props.carTopToRight[index].color === 'grey' ? carGrey :
												props.carTopToRight[index].color === 'yellow' ? carYellow :
													props.carTopToRight[index].color === 'blue' ? carBlue :
														props.carTopToRight[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveTopToRight}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
							/>
							<Options remove={props.remove} onClick={() => props.removeCarTopToRight(index, item)}>
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


