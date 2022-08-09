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

import { Container, MoveBottom, Options, ButtonSettings } from './styles';

export default function CarBottom(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car', title: 'Carro descendo', image: carRed, object: props.carBottom, setObject: props.setCarBottom });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carBottom.map((item, index) => {
				if (props.carBottom[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carBottom' top={item.top} left={item.left} setCarBottom={props.setCarBottom} carBottom={props.carBottom}>
							<MoveBottom src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
										props.carBottom[index].color === 'red' ? carRed :
											props.carBottom[index].color === 'grey' ? carGrey :
												props.carBottom[index].color === 'yellow' ? carYellow :
													props.carBottom[index].color === 'blue' ? carBlue :
														props.carBottom[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveBottom} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} angulo={item.angulo} taxaOcupacao={props.taxaOcupacao} changeCars={props.changeCars}/>
							<Options remove={props.remove} onClick={() => props.removeCarBottom(index, item)}>
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
