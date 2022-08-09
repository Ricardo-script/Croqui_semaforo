import React, { useEffect } from 'react';
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
import { Container, MoveTop, Options, ButtonSettings } from './styles';

export default function CarTop(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car', title: 'Carro subindo', image: carRed, object: props.carTop, setObject: props.setCarTop });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carTop.map((item, index) => {
				if (props.carTop[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carTop' top={item.top} left={item.left} setCarTop={props.setCarTop} carTop={props.carTop}>
							<MoveTop src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
										props.carTop[index].color === 'red' ? carRed :
											props.carTop[index].color === 'grey' ? carGrey :
												props.carTop[index].color === 'yellow' ? carYellow :
													props.carTop[index].color === 'blue' ? carBlue :
														props.carTop[index].color === 'brown' ? carBrown : ''

							} alt=""
								move={props.moveTop}
								tamanho={item.tamanho}
								velocidade={item.velocidade}
								percurso={item.percurso}
								angulo={item.angulo}
								taxaOcupacao={props.taxaOcupacao}
								changeCars={props.changeCars}
							/>
							<Options remove={props.remove} onClick={() => props.removeCarTop(index, item)}>
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
