import React, { useEffect, useState } from 'react';
import closeModal from '../img/closeModal.png';
import play from '../img/play.png';
import pause from '../img/pause.png';
import carRed from '../img/carRed - Copia.png';
import carYellow from '../img/carYellow - Copia.png';
import carGrey from '../img/carGrey - Copia.png';
import carBlue from '../img/carBlue - Copia.png';
import carBrown from '../img/carBrown - Copia.png';
import { Container, AreaItems, Item, AreaPlay, BodySettings, Group, Label, Input, AreaInput, Switch, Total, AreaDescription, Description, Title,
AreaFields, LabelFloat, InputField, LabelField, AreaColors, Color
} from './styles';

export default function Settings(props){

	const[playIco, setPlayIco] = useState(play);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

	const getSwitch = () => {
		if(props.changeCars){
			props.setChangeCars(false);
		}else{
			props.setChangeCars(true);
		}
	}

	const getColor = (color) => {
		const values = [...props.object];
		props.object.forEach((items, index) => {
			items.color = color;
		});
		props.setObject(values);
	}

	const getGrupo = (value) => {
		const values = [...props.object];
		props.object.forEach( (items,index) => {
			items.grupo = value;
		});
		props.setObject(values);
	}

	const getDetector = (value) => {
		const values = [...props.object];
		props.object.forEach( (items,index) => {
			items.detector = value;
		});
		props.setObject(values);
	}

	const getAnel = (value) => {
		const values = [...props.object];
		props.object.forEach( (items,index) => {
			items.anel = value;
		});
		props.setObject(values);
	}

	const getControlador = (value) => {
		const values = [...props.object];
		props.object.forEach( (items,index) => {
			items.controlador = value;
		});
		props.setObject(values);
	}

    const getTamanho = (value) => {
        const values = [...props.object];
        props.object.forEach( (items,index) =>{
            items.tamanho = parseInt(value);
        });
        props.setObject(values);
    }

    const getVelocidade = (value) => {
        const values = [...props.object];
        props.object.forEach( (items,index) =>{
            items.velocidade = parseInt(value);
        });
        console.log(values);
        props.setObject(values);
    }

    const getPercurso = (value) => {
        const values = [...props.object];
        props.object.forEach( (items,index) =>{
            items.percurso = parseInt(value);
        });
        props.setObject(values);
		console.log(values)
    }

	const getPercursoFinal = (value) => {
		const values = [...props.object];
        props.object.forEach( (items,index) => {
            items.percursoFinal = parseInt(value);
        });
        props.setObject(values);
		console.log(values)
	}

	const getAngulo = (value) => {
		const values = [...props.object];
        props.object.forEach( (items,index) =>{

			const values = [...props.object];
			props.object.forEach( (items,index) =>{
				items.angulo = parseInt(value);
			});
			props.setObject(values);
        });
        props.setObject(values);
		console.log(values);
	}

	const getAnguloFinal = (value) => {
		const values = [...props.object];
        props.object.forEach( (items,index) =>{

			const values = [...props.object];
			props.object.forEach( (items,index) =>{
				items.anguloFinal = parseInt(value);
			});
			props.setObject(values);

		});
        props.setObject(values);
		console.log(values);
	}

	const playAnimate = () => {
		if(props.statusPlay === 'stop'){
			setPlayIco(pause);
			props.setStatusPlay('play');
			props.playAnimate()
		}else{
			setPlayIco(play);
			props.setStatusPlay('stop');
			props.stopAnimate();
		}
	}

	//Altera o icone de play na barra de edição
	useEffect(() => {
		if(props.statusPlay === 'stop'){
			setPlayIco(play);
		}else{
			setPlayIco(pause);
		}
	},[props.statusPlay]);

    return(
        <Container open={props.open}>
			<div id="mydiv" className="element" onMouseOver={(e) => dragElement(document.getElementById("mydiv"))}>
				<div id="mydivheader" className='elementHeader'>
                    Configurações
                    <div id="close" onClick={() => props.close(false)}><img src={closeModal} alt="" /></div>
                </div>
				<BodySettings>
                    <AreaItems>
                        <Item type={props.type}>
                            <img src={
									props.object.length === 0 ? props.imgObject :
									props.object[props.index].color === 'yellow' ? carYellow :
									props.object[props.index].color === 'red' ? carRed :
									props.object[props.index].color === 'grey' ? carGrey :
									props.object[props.index].color === 'blue' ? carBlue :
									props.object[props.index].color === 'brown' ? carBrown : props.imgObject
								} alt=""
							/>
                        </Item>
                        <AreaDescription>
                            <Description>
                                <Title>{props.title}</Title>
                            </Description>
							<AreaFields>
							<LabelFloat title={props.title} id='grupo'>
								<InputField type="number" min="0" placeholder=" " value={props.object.length === 0 ? 0 : props.object[props.index].grupo} onChange={(e) => getGrupo(e.target.value)}/>
								<LabelField>Grupo</LabelField>
							</LabelFloat>
							<LabelFloat title={props.title} id='detector'>
								<InputField type="number" min="0" placeholder=" " value={props.object.length === 0 ? 0 : props.object[props.index].detector} onChange={(e) => getDetector(e.target.value)}/>
								<LabelField>Detector</LabelField>
							</LabelFloat>
							<LabelFloat title={props.title} id='anel'>
								<InputField type="number" min="0" placeholder=" " value={props.object.length === 0 ? 0 : props.object[props.index].anel} onChange={(e) => getAnel(e.target.value)}/>
								<LabelField>Anel</LabelField>
							</LabelFloat>
							<LabelFloat title={props.title} id='controlador'>
								<InputField type="text" placeholder=" " value={props.object.length === 0 ? 0 : props.object[props.index].controlador} onChange={(e) => getControlador(e.target.value)}/>
								<LabelField>Controlador</LabelField>
							</LabelFloat>
						</AreaFields>
                        </AreaDescription>
                    </AreaItems>
					<AreaPlay onClick={playAnimate}>
						<img src={playIco} alt="" />
					</AreaPlay>
					<Group id='switch' type={props.type}>
						<Label>Trocar objetos por ocupação:</Label>
						<Switch>
							<input type="checkbox" class="switch-input" onClick={getSwitch}/>
							<span className="switch-label" data-on="On" data-off="Off"></span>
							<span className="switch-handle"></span>
						</Switch>
					</Group>
					<Group id='rangeColor' type={props.type}>
                        <Label>Cor:</Label>
                        <AreaColors>
							<Color id='red'  onClick={() => getColor('red')}></Color>
							<Color id='grey' onClick={() => getColor('grey')}></Color>
							<Color id='yellow' onClick={() => getColor('yellow')}></Color>
							<Color id='blue' onClick={() => getColor('blue')}></Color>
							<Color id='brown' onClick={() => getColor('brown')}></Color>
						</AreaColors>
                    </Group>
                    <Group id='rangeTamanho' type={props.type}>
                        <Label>Tamanho:</Label>
                        <AreaInput>
                            <Input type="range" min="0" max="200" value={props.object.length === 0 ? 0 : props.object[props.index].tamanho} onChange={(e) => getTamanho(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].tamanho}</Total>
                        </AreaInput>
                    </Group>
                    <Group id='rangeVelocidade' type={props.type}>
                        <Label>Velocidade:</Label>
                        <AreaInput>
                        <Input type="range" min="0" max="10" value={props.object.length === 0 ? 0 : props.object[props.index].velocidade} onChange={(e) => getVelocidade(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].velocidade}</Total>
                        </AreaInput>
                    </Group>
                    <Group id='rangePercurso' type={props.type}>
                        <Label>Percurso:</Label>
                        <AreaInput>
                            <Input type="range" min="0" max="100" value={props.object.length === 0 ? 0 : props.object[props.index].percurso} onChange={(e) => getPercurso(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].percurso}</Total>
                        </AreaInput>
                    </Group>
					<Group id='rangePercursoFinal' type={props.type}>
                        <Label>{props.type === 'car-curve' ? 'Percurso da curva final:' : 'Percurso:'}</Label>
                        <AreaInput>
                            <Input type="range" min="0" max="100" value={props.object.length === 0 ? 0 : props.object[props.index].percursoFinal} onChange={(e) => getPercursoFinal(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].percursoFinal}</Total>
                        </AreaInput>
					</Group>

					<Group id='rangeAngulo' type={props.type}>
                        <Label>Ângulo:</Label>
                        <AreaInput>
                        <Input type="range" min="0" max="360" value={props.object.length === 0 ? 0 : props.object[props.index].angulo} onChange={(e) => getAngulo(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].angulo}</Total>
                        </AreaInput>
                    </Group>

					<Group id='rangeAnguloFinal' type={props.type}>
                        <Label>Ângulo Final:</Label>
                        <AreaInput>
                        <Input type="range" min="0" max="360" value={props.object.length === 0 ? 0 : props.object[props.index].anguloFinal} onChange={(e) => getAnguloFinal(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].anguloFinal}</Total>
                        </AreaInput>
					</Group>

                </BodySettings>
			</div>
		</Container>
    );
}
