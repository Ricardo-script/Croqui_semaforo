import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/carRed - Copia.png';
import carYellow from '../../../img/carYellow - Copia.png';
import carGrey from '../../../img/carGrey - Copia.png';
import carBlue from '../../../img/carBlue - Copia.png';
import carBrown from '../../../img/carBrown - Copia.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import motoRed from '../../../img/motoRed - Copia.png';
import busGrey from '../../../img/busGrey.png';
import { Container, MoveBottomToRight, Options, ButtonSettings } from './styles';

export default function CarBottomToRight(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro descendo vira a direita', image: carRed, object: props.carBottomToRight, setObject: props.setCarBottomToRight });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carBottomToRight.map((item, index) => {
				if (props.carBottomToRight[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carBottomToRight' top={item.top} left={item.left} setCarBottomToRight={props.setCarBottomToRight} carBottomToRight={props.carBottomToRight}>
							<MoveBottomToRight src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
										props.carBottomToRight[index].color === 'red' ? carRed :
											props.carBottomToRight[index].color === 'grey' ? carGrey :
												props.carBottomToRight[index].color === 'yellow' ? carYellow :
													props.carBottomToRight[index].color === 'blue' ? carBlue :
														props.carBottomToRight[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveBottomToRight}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
							/>
							<Options remove={props.remove} onClick={() => props.removeBottomToRight(index, item)}>
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
