import React, { useState, useRef, useEffect } from 'react';
import { Container, AreaMapaCroqui, ButtonOpen, MapaCroqui, AreaEditor, Editor, Header, AreaTools, Fieldset, Legend, AreaButtons, Buttom, Img } from './styles';
import { GiHamburgerMenu } from "react-icons/gi";
import CarRight from './components/Objects/CarRight';
import CarTop from './components/Objects/CarTop';
import CarLeft from './components/Objects/CarLeft';
import CarBottom from './components/Objects/CarBottom';
import Semaforo from './components/Objects/Semaforo';
import mapa from './components/img/mapaCroqui.jpg';
import editMapa from './components/img/editMapa.jpg';
import cruzamento from './components/img/cruzamento.png';
import logo from './components/img/logoCroqui.svg';
import arrow from './components/img/arrow.png';
import arrowSide from './components/img/arrow-side.png';
import pedestre from './components/img/pedestre.png';
import play from './components/img/play.png';
import stop from './components/img/stop.png';
import icoSemaforo from './components/img/icoSemaforo.png';
import toolclose from './components/img/toolclose.png';


export default function Croqui() {

    const [openTools, setOpenTools] = useState(false);

    // states dos objetos a ser inseridos no mapa
    const [carRight, setCarRight] = useState([]); //{ top: 42, left: 53},{ top: 42, left: 5},{ top: 37, left: 0}
    const [carTop, setCarTop] = useState([]);
    const [carLeft, setCarLeft] = useState([]);
    const [carBottom, setCarBottom] = useState([]);
    const [objSemaforo, setObjSemaforo] = useState([]);

    // states para animações dos objetos no mapa
    const [moveRight, setMoveRight] = useState(false);
    const [moveTop, setMoveTop] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveBottom, setMoveBottom] = useState(false);

    // states para opções do objeto
    const [remove, setRemove] = useState(false);


    const openDrawer = () => {
        if (openTools) {
            setOpenTools(false);
        } else {
            setOpenTools(true);
        }
    }

    // funções para adicionar novos objetos em tela
    const addCarRight = () => {
        setRemove(false);
        const objects = [...carRight];
        objects.push({ id: objects.length, top: 39.43, left: 46.45 });
        setCarRight(objects);
    }

    const addCarTop = () => {
        setRemove(false);
        const objects = [...carTop];
        objects.push({ id: objects.length, top: 39.43, left: 46.45 });
        setCarTop(objects);
    }

    const addCarLeft = () => {
        setRemove(false);
        const objects = [...carLeft];
        objects.push({ id: objects.length, top: 39.43, left: 46.45 });
        setCarLeft(objects);
    }

    const addCarBottom = () => {
        setRemove(false);
        const objects = [...carBottom];
        objects.push({ id: objects.length, top: 39.43, left: 46.45 });
        setCarBottom(objects);
    }

    const addSemaforo = () => {
        setRemove(false);
        const objects = [...objSemaforo];
        objects.push({ id: objects.length, top: 39.43, left: 46.45 });
        setObjSemaforo(objects);
    }

    //funções para remever objetos em tela
    const removeCarRight = (item, index) => {
        const objects = [...carRight];
        objects[objects.indexOf(index)] = '';
        setCarRight(objects);
    }

    const removeCarTop = (item, index) => {
        const objects = [...carTop];
        objects[objects.indexOf(index)] = '';
        setCarTop(objects);
    }

    const removeCarLeft = (item, index) => {
        const objects = [...carLeft];
        objects[objects.indexOf(index)] = '';
        setCarLeft(objects);
    }

    const removeSemaforo = (item, index) => {
        const objects = [...objSemaforo];
        objects[objects.indexOf(index)] = '';
        setObjSemaforo(objects);
    }

    const removeCarBottom = (item, index) => {
        const objects = [...carBottom];
        objects[objects.indexOf(index)] = '';
        setCarBottom(objects);
    }

    // Animações
    const playAnimate = () => {
        setRemove(false);
        setMoveRight(true);
        setMoveTop(true);
        setMoveLeft(true);
        setMoveBottom(true);
    }

    const stopAnimate = () => {
        setMoveRight(false);
        setMoveTop(false);
        setMoveLeft(false);
        setMoveBottom(false);
        setRemove(false);
    }

    const enabledClose = () => {
        setMoveRight(false);
        setMoveTop(false);
        setMoveLeft(false);
        if (remove) {
            setRemove(false);
        } else {
            setRemove(true);
        }
    }

    return (
        <Container>
            <AreaMapaCroqui>
                <MapaCroqui>
                    <img src={editMapa} alt="" />
                </MapaCroqui>
                <ButtonOpen onClick={() => openDrawer()} title={openTools === false ? 'Abrir editor' : 'Fechar editor'}>
                    <GiHamburgerMenu size={35} color={openTools === false ? '#062467' : '#FFF'} />
                </ButtonOpen>

                <CarRight carRight={carRight} setCarRight={setCarRight} moveRight={moveRight}
                    setMoveRight={setMoveRight} remove={remove} removeCarRight={removeCarRight}
                />
                <CarTop carTop={carTop} setCarTop={setCarTop} moveTop={moveTop}
                    setMoveTop={setMoveTop} remove={remove} removeCarTop={removeCarTop}
                />
                <CarLeft carLeft={carLeft} setCarLeft={setCarLeft} moveLeft={moveLeft}
                    setMoveLeft={setMoveLeft} remove={remove} removeCarLeft={removeCarLeft}
                />
                <CarBottom carBottom={carBottom} setCarBottom={setCarBottom} moveBottom={moveBottom}
                    setMoveBottom={setMoveBottom} remove={remove} removeCarBottom={removeCarBottom}
                />
                <Semaforo objSemaforo={objSemaforo} setObjSemaforo={setObjSemaforo}
                    remove={remove} removeSemaforo={removeSemaforo}
                />
                
            </AreaMapaCroqui>
            <AreaEditor open={openTools}>
                <Editor>
                    <Header>
                        <img src={logo} alt="" />
                    </Header>
                    <AreaTools>
                        <Fieldset>
                            <Legend>Cima</Legend>
                            <AreaButtons>
                                <Buttom><Img id='top-right' src={arrowSide} alt='' /></Buttom>
                                <Buttom><Img id='top-left' src={arrowSide} alt='' /></Buttom>
                                <Buttom onClick={addCarTop}><Img id='top' src={arrow} alt='' /></Buttom>
                                <Buttom><Img id='top-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Direita</Legend>
                            <AreaButtons>
                                <Buttom><Img id='right-down' src={arrowSide} alt='' /></Buttom>
                                <Buttom><Img id='right-top' src={arrowSide} alt='' /></Buttom>
                                <Buttom onClick={addCarRight}><Img id='right' src={arrow} alt='' /></Buttom>
                                <Buttom><Img id='right-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Esquerda</Legend>
                            <AreaButtons>
                                <Buttom><Img id='left-down' src={arrowSide} alt='' /></Buttom>
                                <Buttom><Img id='left-top' src={arrowSide} alt='' /></Buttom>
                                <Buttom onClick={addCarLeft}><Img id='left' src={arrow} alt='' /></Buttom>
                                <Buttom><Img id='left-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Baixo</Legend>
                            <AreaButtons>
                                <Buttom><Img id='down-left' src={arrowSide} alt='' /></Buttom>
                                <Buttom><Img id='down-right' src={arrowSide} alt='' /></Buttom>
                                <Buttom onClick={addCarBottom}><Img id='down' src={arrow} alt='' /></Buttom>
                                <Buttom><Img id='down-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Outros</Legend>
                            <AreaButtons>
                                <Buttom onClick={addSemaforo}><Img id='icoSemaforo' src={icoSemaforo} alt='' /></Buttom>
                                <Buttom><Img id='' src='' alt='' /></Buttom>
                                <Buttom><Img id='' src='' alt='' /></Buttom>
                                <Buttom><Img id='' src='' alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Animação</Legend>
                            <AreaButtons>
                                <Buttom onClick={playAnimate}><Img id='play' src={play} alt='' /></Buttom>
                                <Buttom onClick={stopAnimate}><Img id='stop' src={stop} alt='' /></Buttom>
                                <Buttom onClick={enabledClose}><Img id='close' src={toolclose} alt='' /></Buttom>
                                <Buttom><Img id='' src='' alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                    </AreaTools>
                </Editor>
            </AreaEditor>
        </Container>
    );
}