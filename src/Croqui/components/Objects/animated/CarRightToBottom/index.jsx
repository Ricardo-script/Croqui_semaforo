import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/carRed - Copia.png';
import carYellow from '../../../img/carYellow - Copia.png';
import carGrey from '../../../img/carGrey - Copia.png';
import carBlue from '../../../img/carBlue - Copia.png';
import carBrown from '../../../img/carBrown - Copia.png';
import motoRed from '../../../img/motoRed - Copia.png';
import busGrey from '../../../img/busGrey.png';
import settings from '../../../img/tool.png';
import close from '../../../img/close.png';
import { Container, MoveRightToBottom, Options, ButtonSettings } from './styles';

export default function CarRightToBottom(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro desce a direita', image: carRed, object: props.carRightToBottom, setObject: props.setCarRightToBottom });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carRightToBottom.map((item, index) => {
				if (props.carRightToBottom[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carRightToBottom' top={item.top} left={item.left} setCarRightToBottom={props.setCarRightToBottom} carRightToBottom={props.carRightToBottom}>
							<MoveRightToBottom src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
										props.carRightToBottom[index].color === 'red' ? carRed :
											props.carRightToBottom[index].color === 'grey' ? carGrey :
												props.carRightToBottom[index].color === 'yellow' ? carYellow :
													props.carRightToBottom[index].color === 'blue' ? carBlue :
														props.carRightToBottom[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveRightToBottom}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
							/>
							<Options remove={props.remove} onClick={() => props.removeRightToBottom(index, item)}>
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
