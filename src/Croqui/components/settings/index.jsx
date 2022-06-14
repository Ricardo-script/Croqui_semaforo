import React from 'react';
import closeModal from '../img/closeModal.png';
import { Container, AreaItems, Item, BodySettings, Group, Label, Input, AreaInput, Total, AreaDescription, Description, Title } from './styles';

export default function Settings(props){

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
    }

    return(
        <Container open={props.open}>
			<div id="mydiv" className="element" onMouseOver={(e) => dragElement(document.getElementById("mydiv"))}>
				<div id="mydivheader" className='elementHeader'>
                    Configurações
                    <div id="close" onClick={() => props.close(false)}><img src={closeModal} alt="" /></div>
                </div>
				<BodySettings>
                    <AreaItems>
                        <Item>
                            <img src={props.imgObject} alt="" />
                        </Item>
                        <AreaDescription>
                            <Description>
                                <Title>{props.title}</Title>
                            </Description>
                        </AreaDescription>
                    </AreaItems>
                    <Group>
                        <Label>Tamanho:</Label>
                        <AreaInput>
                            <Input type="range" min="0" max="200" value={props.object.length === 0 ? 0 : props.object[0].tamanho} onChange={(e) => getTamanho(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].tamanho}</Total>
                        </AreaInput>
                    </Group>
                    <Group>
                        <Label>Velocidade:</Label>
                        <AreaInput>
                        <Input type="range" min="0" max="10" value={props.object.length === 0 ? 0 : props.object[0].velocidade} onChange={(e) => getVelocidade(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].velocidade}</Total>
                        </AreaInput>
                    </Group>
                    <Group>
                        <Label>Percurso:</Label>
                        <AreaInput>
                            <Input type="range" min="0" max="100" value={props.object.length === 0 ? 0 : props.object[0].percurso} onChange={(e) => getPercurso(e.target.value)}/>
                            <Total>{props.object.length === 0 ? 0 : props.object[0].percurso}</Total>
                        </AreaInput>
                    </Group>
                </BodySettings>
			</div>
		</Container>
    ); 
}