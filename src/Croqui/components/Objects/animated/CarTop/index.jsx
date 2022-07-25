import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import carRed from '../../../img/direita.png';
import carYellow from '../../../img/carYellow.png';
import carGrey from '../../../img/esquerda.png';
import carBlue from '../../../img/carBlue.png';
import carBrown from '../../../img/carBrown.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
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
								props.carTop[index].color === 'red' ? carRed :
									props.carTop[index].color === 'grey' ? carGrey :
										props.carTop[index].color === 'yellow' ? carYellow :
											props.carTop[index].color === 'blue' ? carBlue :
												props.carTop[index].color === 'brown' ? carBrown : ''
							} alt="" move={props.moveTop} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} angulo={item.angulo} />
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
