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
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
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
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
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
