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
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
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
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
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
