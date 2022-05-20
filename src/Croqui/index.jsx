import React, { useState } from 'react';
import { Container, AreaMapaCroqui, ButtonOpen, MapaCroqui, AreaEditor, Editor, Header, AreaTools, Fieldset, Legend, AreaButtons, OptionButton,
Buttom, Img } from './styles';
import { GiHamburgerMenu } from "react-icons/gi";
import ModalConfirm from './components/Modals/modalConfirm';
import CarRight from './components/Objects/CarRight';
import CarTop from './components/Objects/CarTop';
import CarLeft from './components/Objects/CarLeft';
import CarBottom from './components/Objects/CarBottom';
import CarTopToRight from './components/Objects/CarTopToRight';
import CarTopToLeft from './components/Objects/CarTopToLeft';
import CarRightToBottom from './components/Objects/CarRightToBottom';
import CarLeftToBottom from './components/Objects/CarLeftToBottom';
import CarRightToTop from './components/Objects/CarRightToTop';
import Semaforo from './components/Objects/Semaforo';
import WalkLeft from './components/Objects/WalkLeft';
import WalkRight from './components/Objects/walkRight';
import WalkBottom from './components/Objects/WalkBottom';
import WalkTop from './components/Objects/WalkTop';
//import mapa from './components/img/mapaCroqui.jpg';
import MapaDefault from './components/img/MapaDefault.png';
//import cruzamento from './components/img/cruzamento.png';
import logo from './components/img/logoCroqui.svg';
import arrow from './components/img/arrow.png';
import arrowSide from './components/img/arrow-side.png';
import pedestre from './components/img/pedestre.png';
import play from './components/img/play.png';
import stop from './components/img/stop.png';
import icoSemaforo from './components/img/icoSemaforo.png';
import toolclose from './components/img/toolclose.png';
import clear from './components/img/clear.png';
import MenuType from './components/MenuType';


export default function Croqui() {

    const [openTools, setOpenTools] = useState(false);

    //states para menu de opções de objetos
    const [openTypesTopRigth, setOpenTypesTopRigth] = useState(false);
    const [openTypesTopLeft, setOpenTypesTopLeft] = useState(false);
    const [openTypesTop, setOpenTypesTop] = useState(false);
    //const [openTypesBottomRigth, setOpenTypesBottomRigth] = useState(false);
    

    // states dos objetos a ser inseridos no mapa
    const [carRight, setCarRight] = useState([]); //{ top: 42, left: 53},{ top: 42, left: 5},{ top: 37, left: 0}
    const [carTop, setCarTop] = useState([]);
    const [carLeft, setCarLeft] = useState([]); 
    const [carBottom, setCarBottom] = useState([]);
    const [carTopToRight, setCarTopToRight] = useState([]);
    const [carTopToLeft, setCarTopToLeft] = useState([]);
    const [carRightToBottom, setCarRightToBottom] = useState([]);
    const [carLeftToBottom, setCarLeftToBottom] = useState([]);
    const [carLeftToTop, setCarLeftToTop] = useState([]);
    const [carRightToTop, setCarRightToTop] = useState([]);
    const [objSemaforo, setObjSemaforo] = useState([]);
    const [walkLeft, setWalkLeft] = useState([]);
    const [walkRight, setWalkRight] = useState([]);
    const [walkBottom, setWalkBottom] = useState([]);
    const [walkTop, setWalkTop] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    // states para animações dos objetos no mapa
    const [moveRight, setMoveRight] = useState(false);
    const [moveTop, setMoveTop] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveBottom, setMoveBottom] = useState(false);
    const [moveTopToRight, setMoveTopToRight] = useState(false);
    const [moveTopToLeft, setMoveTopToLeft] = useState(false);
    const [moveRightToBottom, setMoveRightToBottom] = useState(false);
    const [moveLeftToBottom, setMoveLeftToBottom] = useState(false);
    const [moveRightToTop, setMoveRightToTop] = useState(false);
    const [moveLeftToTop, setMoveLeftToTop] = useState(false);
    const [moveWalkLeft, setMoveWalkLeft] = useState(false);
    const [moveWalkRight, setMoveWalkRight] = useState(false);
    const [moveWalkBottom, setMoveWalkBottom] = useState(false);
    const [moveWalkTop, setMoveWalkTop] = useState(false);

    // states para opções do objeto
    const [remove, setRemove] = useState(false);


    const openDrawer = () => {
        if (openTools) {
            setOpenTools(false);
            //fecha menus de tipos de objetos
            setOpenTypesTopRigth(false);
            setOpenTypesTopLeft(false);
            setOpenTypesTop(false);
        } else {
            setOpenTools(true);
        }
    }

    // funções para adicionar novos objetos em tela
    const addCarRight = () => {
        setRemove(false);
        const objects = [...carRight];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setCarRight(objects);
    }

    const addCarTop = () => {
        setRemove(false);
        const objects = [...carTop];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setCarTop(objects);
    }

    const addCarLeft = () => {
        setRemove(false);
        const objects = [...carLeft];
        objects.push({ id: objects.length, top: 47.89, left: 47.96 });
        setCarLeft(objects);
    }

    const addCarBottom = () => {
        setRemove(false);
        const objects = [...carBottom];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setCarBottom(objects);
    }

    const addCarTopToRight = () => {
        setRemove(false);
        const objects = [...carTopToRight];
        objects.push({ id: objects.length, top: 47.89, left: 47.96 });
        setCarTopToRight(objects);
    }

    
    const addCarTopToLeft = () => {
        setRemove(false);
        const objects = [...carTopToLeft];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setCarTopToLeft(objects);
    }

    const addCarRightToBottom = () => {
        setRemove(false);
        const objects = [...carRightToBottom];
        objects.push({ id: objects.length, top: 47.89, left: 47.96 });
        setCarRightToBottom(objects);
    }

    const addCarLeftToBottom = () => {
        setRemove(false);
        const objects = [...carLeftToBottom];
        objects.push({ id: objects.length, top: 47.89, left: 47.96 });
        setCarLeftToBottom(objects);
    }

    const addCarRightToTop = () => {
        setRemove(false);
        const objects = [...carRightToTop];
        objects.push({ id: objects.length, top: 47.89, left: 47.96 });
        setCarRightToTop(objects);
    }

    const addCarLeftToTop = () => {
        setRemove(false);
        const objects = [...carLeftToTop];
        objects.push({ id: objects.length, top: 47.89, left: 47.96 });
        setCarLeftToTop(objects);
    }

    const addSemaforo = () => {
        setRemove(false);
        const objects = [...objSemaforo];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setObjSemaforo(objects);
    }

    const addWalkLeft = () => {
        setRemove(false);
        const objects = [...walkLeft];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setWalkLeft(objects);
    }

    const addWalkRight = () => {
        setRemove(false);
        const objects = [...walkRight];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setWalkRight(objects);
    }

    const addWalkBottom = () => {
        setRemove(false);
        const objects = [...walkBottom];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setWalkBottom(objects);
    }

    const addWalkTop = () => {
        setRemove(false);
        const objects = [...walkTop];
        objects.push({ id: objects.length, top: 44.89, left: 48.22 });
        setWalkTop(objects);
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

    const removeCarTopToRight = (item, index) => {
        const objects = [...carTopToRight];
        objects[objects.indexOf(index)] = '';
        setCarTopToRight(objects);
    }

    const removeCarTopToLeft = (item, index) => {
        const objects = [...carTopToLeft];
        objects[objects.indexOf(index)] = '';
        setCarTopToLeft(objects);
    }

    const removeRightToTop = (item, index) => {
        const objects = [...carRightToTop];
        objects[objects.indexOf(index)] = '';
        setCarRightToTop(objects);
    }

    const removeLeftToTop = (item, index) => {
        const objects = [...carRightToTop];
        objects[objects.indexOf(index)] = '';
        setCarRightToTop(objects);
    }

    const removeRightToBottom = (item, index) => {
        const objects = [...carRightToBottom];
        objects[objects.indexOf(index)] = '';
        setCarRightToBottom(objects);
    }

    const removeLeftToBottom = (item, index) => {
        const objects = [...carLeftToBottom];
        objects[objects.indexOf(index)] = '';
        setCarLeftToBottom(objects);
    }

    const removeWalkLeft = (item, index) => {
        const objects = [...walkLeft];
        objects[objects.indexOf(index)] = '';
        setWalkLeft(objects);
    }

    const removeWalkRight = (item, index) => {
        const objects = [...walkRight];
        objects[objects.indexOf(index)] = '';
        setWalkRight(objects);
    }

    const removeWalkBottom = (item, index) => {
        const objects = [...walkBottom];
        objects[objects.indexOf(index)] = '';
        setWalkBottom(objects);
    }

    const removeWalkTop = (item, index) => {
        const objects = [...walkTop];
        objects[objects.indexOf(index)] = '';
        setWalkTop(objects);
    }

    // Animações
    const playAnimate = () => {
        setRemove(false);
        setMoveRight(true);
        setMoveTop(true);
        setMoveLeft(true);
        setMoveBottom(true);
        setMoveTopToRight(true);
        setMoveTopToLeft(true);
        setMoveRightToBottom(true);
        setMoveLeftToBottom(true);
        setMoveLeftToTop(true);
        setMoveRightToTop(true);
        setMoveWalkLeft(true);
        setMoveWalkRight(true);
        setMoveWalkBottom(true);
        setMoveWalkTop(true);
       
    }

    // parar animação
    const stopAnimate = () => {
        setMoveRight(false);
        setMoveTop(false);
        setMoveLeft(false);
        setMoveBottom(false);
        setMoveTopToRight(false);
        setMoveTopToLeft(false);
        setMoveRightToBottom(false);
        setMoveLeftToBottom(false);
        setMoveLeftToTop(false);
        setMoveRightToTop(false);
        setMoveWalkLeft(false);
        setMoveWalkRight(false);
        setMoveWalkBottom(false);
        setMoveWalkTop(false);
        setRemove(false);
    }

    //parar carro no farol vermelho
    const pause = () => {
        setMoveRight('pause');
        setMoveTop('pause');
        setMoveLeft('pause');
        setMoveBottom('pause');
        setMoveTopToRight('pause');
        setMoveTopToLeft('pause');
        setMoveRightToBottom('pause');
        setMoveLeftToBottom('pause');
        setMoveLeftToTop('pause');
        setMoveRightToTop('pause');
        setMoveWalkLeft('pause');
        setMoveWalkRight('pause');
        setMoveWalkBottom('pause');
        setMoveWalkTop('pause');
        setRemove(false);
    }

    //habilitar icone de excluir objeto
    const enabledClose = () => {
        setMoveRight(false);
        setMoveTop(false);
        setMoveLeft(false);
        setMoveBottom(false);
        setMoveTopToRight(false);
        setMoveTopToLeft(false);
        setMoveRightToBottom(false);
        setMoveLeftToBottom(false);
        setMoveLeftToTop(false);
        setMoveRightToTop(false);
        setMoveWalkLeft(false);
        setMoveWalkRight(false);
        setMoveWalkBottom(false);
        setMoveWalkTop(false);
        if (remove) {
            setRemove(false);
        } else {
            setRemove(true);
        }
    }

    const modalStatus = () => {
        if(openModal === 'none'){
            setOpenModal('block');
        }else{
            setOpenModal('none');
        }
    }

    //função para abrir menus dos botões com os objetos a serem inseridos no mapa
    const openTypes = (name) => {
        if(name === 'top-right'){
            if(openTypesTopRigth === false){
                setOpenTypesTopRigth(true);
                setOpenTypesTopLeft(false);
                setOpenTypesTop(false);
                //setOpenTypesBottomRigth(false)
            }else{
                setOpenTypesTopRigth(false);
            }
        }
        if(name === 'top-left'){
            if(openTypesTopLeft === false){
                setOpenTypesTopLeft(true);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                //setOpenTypesBottomRigth(false)
                
            }else{
                setOpenTypesTopLeft(false);
            }
        }
        if(name === 'top'){
            if(openTypesTop === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(true);
                //setOpenTypesBottomRigth(false)
                
            }else{
                setOpenTypesTop(false);
            }
        }
        //inserir depois que criar o right-down
       
    }

    return (
        <Container>
            <AreaMapaCroqui>
                <MapaCroqui>
                    <img src={MapaDefault} alt="" />
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
                <CarTopToRight carTopToRight={carTopToRight} setCarTopToRight={setCarTopToRight} moveTopToRight={moveTopToRight}
                    setMoveTopToRight={setMoveTopToRight} remove={remove} removeCarTopToRight={removeCarTopToRight}
                />
                <CarTopToLeft carTopToLeft={carTopToLeft} setCarTopToLeft={setCarTopToLeft} moveTopToLeft={moveTopToLeft}
                    setMoveTopToLeft={setMoveTopToLeft} remove={remove} removeCarTopToLeft={removeCarTopToLeft}
                />
                <CarRightToBottom carRightToBottom={carRightToBottom} setCarRightToBottom={setCarRightToBottom} moveRightToBottom={moveRightToBottom}
                    setMoveRightToBottom={setMoveRightToBottom} remove={remove} removeRightToBottom={removeRightToBottom}
                />
                <CarLeftToBottom carLeftToBottom={carLeftToBottom} setCarLeftToBottom={setCarLeftToBottom} moveLeftToBottom={moveLeftToBottom}
                    setMoveLeftToBottom={setMoveLeftToBottom} remove={remove} removeLeftToBottom={removeLeftToBottom}
                />
                <CarRightToTop carRightToTop={carRightToTop} setCarRightToTop={setCarRightToTop} moveRightToTop={moveRightToTop}
                    setMoveRightToTop={setMoveRightToTop} remove={remove} removeRightToTop={removeRightToTop}
                />
                <Semaforo objSemaforo={objSemaforo} setObjSemaforo={setObjSemaforo}
                    remove={remove} removeSemaforo={removeSemaforo}
                />
                <WalkLeft walkLeft={walkLeft} setWalkLeft={setWalkLeft} moveWalkLeft={moveWalkLeft}
                    setMoveWalkLeft={setMoveWalkLeft} remove={remove} removeWalkLeft={removeWalkLeft}
                />
                <WalkRight walkRight={walkRight} setWalkRight={setWalkRight} moveWalkRight={moveWalkRight}
                    setMoveWalkRight={setMoveWalkRight} remove={remove} removeWalkRight={removeWalkRight}
                />
                <WalkBottom walkBottom={walkBottom} setWalkBottom={setWalkBottom} moveWalkBottom={moveWalkBottom}
                    setMoveWalkBottom={setMoveWalkBottom} remove={remove} removeWalkBottom={removeWalkBottom}
                />
                <WalkTop walkTop={walkTop} setWalkTop={setWalkTop} moveWalkTop={moveWalkTop}
                    setMoveWalkTop={setMoveWalkTop} remove={remove} removeWalkTop={removeWalkTop}
                />
                <ModalConfirm openModal={openModal} setOpenModal={setOpenModal}/>
                
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
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('top-right')}><Img id='top-right' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='topToright' openTypes={openTypesTopRigth} setOpenTypes={setOpenTypesTopRigth} addObject={addCarTopToRight}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('top-left')}><Img id='top-left' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='topToleft' openTypes={openTypesTopLeft} setOpenTypes={setOpenTypesTopLeft} addObject={addCarTopToLeft}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('top')}><Img id='top' src={arrow} alt='' /></Buttom>
                                    <MenuType name='top' openTypes={openTypesTop} setOpenTypes={setOpenTypesTop} addObject={addCarTop}/>
                                </OptionButton>
                                <Buttom onClick={addWalkTop}><Img id='top-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Direita</Legend>
                            <AreaButtons>
                                <OptionButton>
                                    <Buttom onClick={addCarRightToBottom}><Img id='right-down' src={arrowSide} alt='' /></Buttom>
                                    {/* <MenuType name='BottomToright' openTypes={openTypesBottomRigth} setOpenTypes={setOpenTypesBottomRigth}/>*/}
                                </OptionButton>
                                <Buttom onClick={addCarRightToTop}><Img id='right-top' src={arrowSide} alt='' /></Buttom>
                                <Buttom onClick={addCarRight}><Img id='right' src={arrow} alt='' /></Buttom>
                                <Buttom onClick={addWalkRight}><Img id='right-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Esquerda</Legend>
                            <AreaButtons>
                                <Buttom onClick={addCarLeftToBottom}><Img id='left-down' src={arrowSide} alt='' /></Buttom>
                                <Buttom><Img id='left-top' src={arrowSide} alt='' /></Buttom>
                                <Buttom onClick={addCarLeft}><Img id='left' src={arrow} alt='' /></Buttom>
                                <Buttom onClick={addWalkLeft}><Img id='left-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Baixo</Legend>
                            <AreaButtons>
                                <Buttom><Img id='down-left' src={arrowSide} alt='' /></Buttom>
                                <Buttom><Img id='down-right' src={arrowSide} alt='' /></Buttom>
                                <Buttom onClick={addCarBottom}><Img id='down' src={arrow} alt='' /></Buttom>
                                <Buttom onClick={addWalkBottom}><Img id='down-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Outros</Legend>
                            <AreaButtons>
                                <Buttom onClick={addSemaforo}><Img id='icoSemaforo' src={icoSemaforo} alt='' /></Buttom>
                                <Buttom onClick={pause}><Img id='' src='' alt='' /></Buttom>
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
                                <Buttom onClick={modalStatus} title='Limpar tudo'><Img id='clear' src={clear} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                    </AreaTools>
                </Editor>
            </AreaEditor>
        </Container>
    );
}