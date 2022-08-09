import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/carRed - Copia.png';
import carYellow from '../../../img/carYellow - Copia.png';
import carGrey from '../../../img/carGrey - Copia.png';
import carBlue from '../../../img/carBlue - Copia.png';
import carBrown from '../../../img/carBrown - Copia.png';
import settings from '../../../img/tool.png';
import close from '../../../img/close.png';
import motoRed from '../../../img/motoRed - Copia.png';
import busGrey from '../../../img/busGrey.png';
import { Container, MoveLeftToTop, Options, ButtonSettings } from './styles';

export default function CarLeftToTop(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car-curve', title: 'Carro sobe á esquerda', image: carRed, object: props.carLeftToTop, setObject: props.setCarLeftToTop });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carLeftToTop.map((item, index) => {
				if (props.carLeftToTop[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carLeftToTop' top={item.top} left={item.left} setCarLeftToTop={props.setCarLeftToTop} carLeftToTop={props.carLeftToTop}>
							<MoveLeftToTop src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
								props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
								props.carLeftToTop[index].color === 'red' ? carRed :
									props.carLeftToTop[index].color === 'grey' ? carGrey :
										props.carLeftToTop[index].color === 'yellow' ? carYellow :
											props.carLeftToTop[index].color === 'blue' ? carBlue :
												props.carLeftToTop[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveLeftToTop}
								tamanho={item.tamanho} velocidade={item.velocidade}
								percursoFinal={item.percursoFinal}
								percurso={item.percurso}
								angulo={item.angulo}
								anguloFinal={item.anguloFinal}
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
							/>
							<Options remove={props.remove} onClick={() => props.removeLeftToTop(index, item)}>
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
