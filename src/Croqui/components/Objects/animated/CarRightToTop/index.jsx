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
import { Container, MoveRightToTop, Options, ButtonSettings } from './styles';

export default function CarRightToTop(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro sobe à direita', image: carRed, object: props.carRightToTop, setObject: props.setCarRightToTop });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carRightToTop.map((item, index) => {
				if (props.carRightToTop[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carRightToTop' top={item.top} left={item.left} setCarRightToTop={props.setCarRightToTop} carRightToTop={props.carRightToTop}>
							<MoveRightToTop src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
										props.carRightToTop[index].color === 'red' ? carRed :
											props.carRightToTop[index].color === 'grey' ? carGrey :
												props.carRightToTop[index].color === 'yellow' ? carYellow :
													props.carRightToTop[index].color === 'blue' ? carBlue :
														props.carRightToTop[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveRightToTop}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
							/>
							<Options remove={props.remove} onClick={() => props.removeRightToTop(index, item)}>
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
