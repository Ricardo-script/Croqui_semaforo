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
import busGrey from '../../../img/busGrey - Copia.png';
import { Container, MoveLeft, Options, ButtonSettings } from './styles';

export default function CarLeft(props) {

	const insertConfigModalSettings = (index) => {
		props.setPropsSettings({ index: index, type: 'car', title: 'Carro horizontal esquerda', image: carRed, object: props.carLeft, setObject: props.setCarLeft });
		props.setOpenSettings(true);
	}

	return (
		<Container>
			{props.carLeft.map((item, index) => {
				if (props.carLeft[index] !== '') {
					return (
						<ItemDraggable key={index} index={index} object='carLeft' top={item.top} left={item.left} setCarLeft={props.setCarLeft} carLeft={props.carLeft}>
							<MoveLeft src={
								props.changeCars === true && props.taxaOcupacao === 33 ? motoRed :
									props.changeCars === true && props.taxaOcupacao === 80 ? busGrey :
										props.carLeft[index].color === 'red' ? carRed :
											props.carLeft[index].color === 'grey' ? carGrey :
												props.carLeft[index].color === 'yellow' ? carYellow :
													props.carLeft[index].color === 'blue' ? carBlue :
														props.carLeft[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveLeft} tamanho={item.tamanho} velocidade={item.velocidade}
								percurso={item.percurso} angulo={item.angulo} taxaOcupacao={props.taxaOcupacao} changeCars={props.changeCars}
							/>
							<Options remove={props.remove} onClick={() => props.removeCarLeft(index, item)}>
								<img src={close} alt="" />
							</Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={() => insertConfigModalSettings(index)} />
							</ButtonSettings>
						</ItemDraggable>
					)
				} else {
					return null;
				}
			})}
		</Container>
	);
}
