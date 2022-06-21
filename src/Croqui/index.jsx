import React, { useState } from 'react';
import { Container, AreaMapaCroqui, ButtonOpen, MapaCroqui, AreaEditor, Editor, Header, AreaTools, Fieldset, Legend, AreaButtons, OptionButton,
Buttom, Img } from './styles';
import { GiHamburgerMenu } from "react-icons/gi";
import ModalConfirm from './components/Modals/modalConfirm';
import Settings from './components/settings';
import CarRight from './components/Objects/animated/CarRight';
import CarTop from './components/Objects/animated/CarTop';
import CarLeft from './components/Objects/animated/CarLeft';
import CarBottom from './components/Objects/animated/CarBottom';
import CarTopToRight from './components/Objects/animated/CarTopToRight';
import CarTopToLeft from './components/Objects/animated/CarTopToLeft';
import CarRightToBottom from './components/Objects/animated/CarRightToBottom';
import CarLeftToBottom from './components/Objects/animated/CarLeftToBottom';
import CarRightToTop from './components/Objects/animated/CarRightToTop';
import CarLeftToTop from './components/Objects/animated/CarLeftToTop';
import CarBottomToLeft from './components/Objects/animated/CarBottomToLeft';
import CarBottomToRight from './components/Objects/animated/CarBottomToRight';
import SemaforoFront from './components/Objects/animated/SemaforoFront';
import SemaforoLeft from './components/Objects/animated/SemaforoLeft';
import SemaforoRight from './components/Objects/animated/SemaforoRight';
import WalkLeft from './components/Objects/animated/WalkLeft';
import WalkRight from './components/Objects/animated/walkRight';
import WalkBottom from './components/Objects/animated/WalkBottom';
import WalkTop from './components/Objects/animated/WalkTop';
import Ocupacao from './components/Objects/default/Ocupacao';
import ArrowTopToRight from './components/Objects/default/ArrowTopToRight';
import ArrowTopToLeft from './components/Objects/default/ArrowTopToLeft';
import ArrowRightToBottom from './components/Objects/default/ArrowRightToBottom';
import ArrowRightToTop from './components/Objects/default/ArrowRightToTop';
import ArrowTop from './components/Objects/default/ArrowTop';
import ArrowRight from './components/Objects/default/ArrowRight';
import ArrowLeftToBottom from './components/Objects/default/ArrowLeftToBottom';
import ArrowLeftToTop from './components/Objects/default/ArrowLeftToTop';
import ArrowLeft from './components/Objects/default/ArrowLeft';
import ArrowBottomToLeft from './components/Objects/default/ArrowBottomToLeft';
import ArrowBottomToRight from './components/Objects/default/ArrowBottomToRight';
import ArrowBottom from './components/Objects/default/ArrowBottom';
import Botoeira from './components/Objects/default/Botoeira';
import Detector from './components/Objects/default/Detector';
//import mapa from './components/img/mapaCroqui.jpg';
//import MapaDefault from './components/img/MapaDefault.png';
import MapaCroqui02  from './components/img/mapaCroqui02.jpg';
//import cruzamento from './components/img/cruzamento.png';
import logo from './components/img/logoCroqui.svg';
import arrow from './components/img/arrow.png';
import arrowSide from './components/img/arrow-side.png';
import pedestre from './components/img/pedestre.png';
import play from './components/img/play.png';
import pauseSwitch from './components/img/pause.png';
import icoSettings from './components/img/icoSettings.png';
import icoSemaforo from './components/img/icoSemaforo.png';
//import toolclose from './components/img/toolclose.png';
import clear from './components/img/clear.png';
import MenuType from './components/MenuType';
import MenuTypeSemaforo from './components/MenuTypeSemaforo';
import botoeiraIco from './components/img/botoeiraIco.png';
import icoTaxa from './components/img/icoTaxa.png';
import icoContagem from './components/img/icoContagem.png';

export default function Croqui() {

    //state para abrir editor
    const [openTools, setOpenTools] = useState(false);

    //controlador do play da animação
    const [statusPlay, setStatusPlay] = useState('stop');

    //state para abrir e fechar modal de configuração de objetos
    const [openSettings, setOpenSettings] = useState(false);

    //state contendo as propriedades de cada objeto
    const [propsSettings, setPropsSettings] = useState({type: '', title: '', image: '', object: '', setObject:''});

    //states para menu de opções de objetos no editor
    const [openTypesTopRigth, setOpenTypesTopRigth] = useState(false);
    const [openTypesTopLeft, setOpenTypesTopLeft] = useState(false);
    const [openTypesTop, setOpenTypesTop] = useState(false);
    const [openTypeRigthToBottom, setopenTypeRigthToBottom] = useState(false);
    const [openTypeRigthToTop, setOpenTypeRigthToTop] = useState(false);
    const [openTypeRight, setOpenTypeRight] = useState(false);
    const [openTypeLeftToBottom, setOpenTypeLeftToBottom] = useState(false);
    const [openTypeLeftToTop, setOpenTypeLeftToTop] = useState(false);
    const [openTypeLeft, setOpenTypeLeft] = useState(false);
    const [openTypeBottomToLeft, setOpenTypeBottomToLeft] = useState(false);
    const [openTypeBottomToRight, setOpenTypeBottomToRight] = useState(false);
    const [openTypeBottom, setOpenTypeBottom] = useState(false);
    const [openTypeSemaforo, setOpenTypeSemaforo] = useState(false);

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
    const [carBottomToLeft, setCarBottomToLeft] = useState([]);
    const [carBottomToRight, setCarBottomToRight] = useState([]);
    const [objSemaforo, setObjSemaforo] = useState([]);
    const [objSemaforoLeft, setObjSemaforoLeft] = useState([]);
    const [objSemaforoRight, setObjSemaforoRight] = useState([]);
    const [objBotoeira, setObjBotoeira] = useState([]);
    const [objOcupacao, setObjOcupacao] = useState([]);
    const [objDetector, setObjDetector] = useState([]);

    const [walkLeft, setWalkLeft] = useState([]);
    const [walkRight, setWalkRight] = useState([]);
    const [walkBottom, setWalkBottom] = useState([]);
    const [walkTop, setWalkTop] = useState([]);
    const [arrowTopToRight, setArrowTopToRight] = useState([]);
    const [arrowTopToLeft, setArrowTopToLeft] = useState([]);
    const [arrowRightToBottom, setArrowRightToBottom] = useState([]);
    const [arrowTop, setArrowTop] = useState([]);
    const [arrowRight, setArrowRight] = useState([]);
    const [arrowLeft, setArrowLeft] = useState([]);
    const [arrowRightToTop, setArrowRightToTop] = useState([]);
    const [arrowLeftToBottom, setArrowLeftToBottom] = useState([]);
    const [arrowLeftToTop, setArrowLeftToTop] = useState([]);
    const [arrowBottomToLeft, setArrowBottomToLeft] = useState([]);
    const [arrowBottomToRight, setArrowBottomToRight] = useState([]);
    const [arrowBottom, setArrowBottom] = useState([]);
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
    const [moveBottomToLeft, setMoveBottomToLeft] = useState(false);
    const [moveBottomToRight, setMoveBottomToRight] = useState(false);
    const [moveWalkLeft, setMoveWalkLeft] = useState(false);
    const [moveWalkRight, setMoveWalkRight] = useState(false);
    const [moveWalkBottom, setMoveWalkBottom] = useState(false);
    const [moveWalkTop, setMoveWalkTop] = useState(false);
    const [moveArrowTop, setMoveArrowTop] = useState(false);
    const [moveArrowRight ,setMoveArrowRight] = useState(false);
    const [moveArrowLeft, setMoveArrowLeft] = useState(false);
    const [moveArrowTopToRight, setMoveArrowTopToRight] = useState(false);
    const [moveArrowTopToLeft, setMoveArrowTopToLeft] = useState(false);
    const [moveArrowRightToBottom, setMoveArrowRightToBottom] = useState(false);
    const [moveArrowRightToTop, setMoveArrowRightToTop] = useState(false);
    const [moveArrowLeftToBottom, setMoveArrowLeftBottom] = useState(false);
    const [moveArrowLeftToTop, setMoveArrowLeftToTop] = useState(false);
    const [moveArrowBottomToLeft, setMoveArrowBottomToLeft] = useState(false);
    const [moveArrowBottomToRight, setMoveArrowBottomToRight] = useState(false);
    const [moveArrowBottom, setMoveArrowBottom] = useState(false);

    // states para opções do objeto
    const [remove, setRemove] = useState(false);

    //Função abrir editor
    const openDrawer = () => {
        if (openTools) {
            setOpenTools(false);
            //fecha menus de tipos de objetos
            setOpenTypesTopRigth(false);
            setOpenTypesTopLeft(false);
            setOpenTypesTop(false);
            setopenTypeRigthToBottom(false);
            setOpenTypeRigthToTop(false);
            setOpenTypeRight(false);
            setOpenTypeLeftToBottom(false);
            setOpenTypeLeftToTop(false);
            setOpenTypeLeft(false);
            setOpenTypeBottomToLeft(false);
            setOpenTypeBottomToRight(false);
            setOpenTypeBottom(false);
            setOpenTypeSemaforo(false);

        } else {
            setOpenTools(true);
        }
    }

    // funções para adicionar novos objetos em tela
    const addCarRight = () => {
        setRemove(false);
        const objects = [...carRight];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setCarRight(objects);
    }

    const addCarTop = () => {
        setRemove(false);
        const objects = [...carTop];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 67, velocidade: 5, percurso: 30});
        setCarTop(objects);
    }

    const addCarLeft = () => {
        setRemove(false);
        const objects = [...carLeft];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setCarLeft(objects);
    }

    const addCarBottom = () => {
        setRemove(false);
        const objects = [...carBottom];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 50, velocidade: 5, percurso: 30});
        setCarBottom(objects);
    }

    const addCarTopToRight = () => {
        setRemove(false);
        const objects = [...carTopToRight];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 67, velocidade: 5, percurso: 18});
        setCarTopToRight(objects);
    }

    const addCarTopToLeft = () => {
        setRemove(false);
        const objects = [...carTopToLeft];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 67, velocidade: 5, percurso: 30});
        setCarTopToLeft(objects);
    }

    const addCarRightToBottom = () => {
        setRemove(false);
        const objects = [...carRightToBottom];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setCarRightToBottom(objects);
    }

    const addCarLeftToBottom = () => {
        setRemove(false);
        const objects = [...carLeftToBottom];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setCarLeftToBottom(objects);
    }

    const addCarRightToTop = () => {
        setRemove(false);
        const objects = [...carRightToTop];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setCarRightToTop(objects);
    }

    const addCarLeftToTop = () => {
        setRemove(false);
        const objects = [...carLeftToTop];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setCarLeftToTop(objects);
    }

    const addCarBottomToLeft = () => {
        setRemove(false);
        const objects = [...carBottomToLeft];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 50, velocidade: 5, percurso: 30});
        setCarBottomToLeft(objects);
    }

    const addCarBottomToRight = () => {
        setRemove(false);
        const objects = [...carBottomToRight];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 50, velocidade: 5, percurso: 30});
        setCarBottomToRight(objects);
    }

    const addSemaforo = () => {
        setRemove(false);
        const objects = [...objSemaforo];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setObjSemaforo(objects);
    }

    const addSemaforoLeft = () => {
        setRemove(false);
        const objects = [...objSemaforoLeft];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setObjSemaforoLeft(objects);
    }
    const addSemaforoRight = () => {
        setRemove(false);
        const objects = [...objSemaforoRight];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setObjSemaforoRight(objects);
    }

    const addWalkLeft = () => {
        setRemove(false);
        const objects = [...walkLeft];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 50, velocidade: 5, percurso: 12});
        setWalkLeft(objects);
    }

    const addWalkRight = () => {
        setRemove(false);
        const objects = [...walkRight];
		objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 50, velocidade: 5, percurso: 12});
        setWalkRight(objects);
    }

    const addWalkBottom = () => {
        setRemove(false);
        const objects = [...walkBottom];
		objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 50, velocidade: 5, percurso: 12});
        setWalkBottom(objects);
    }

    const addWalkTop = () => {
        setRemove(false);
        const objects = [...walkTop];
		objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 50, velocidade: 5, percurso: 12});
        setWalkTop(objects);
    }

    const addArrowTopToRight = () => {
        setRemove(false);
        const objects = [...arrowTopToRight];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowTopToRight(objects);
    }

    const addArrowTopToLeft = () => {
        setRemove(false);
        const objects = [...arrowTopToLeft];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowTopToLeft(objects);
    }

    const addArrowRightToBottom = () => {
        setRemove(false);
        const objects = [...arrowRightToBottom];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowRightToBottom(objects);
    }

    const addArrowTop = () => {
        setRemove(false);
        const objects = [...arrowTop];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowTop(objects);
    }

    const addArrowRightToTop = () => {
        setRemove(false);
        const objects = [...arrowRightToTop];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowRightToTop(objects);
    }

    const addArrowRight = () => {
        setRemove(false);
        const objects = [...arrowRight];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowRight(objects);
    }

    const addArrowLeftToBottom = () => {
        setRemove(false);
        const objects = [...arrowLeftToBottom];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowLeftToBottom(objects);
    }

    const addArrowLeftToTop = () => {
        setRemove(false);
        const objects = [...arrowLeftToTop];
         objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowLeftToTop(objects);
    }

    const addArrowLeft = () => {
        setRemove(false);
        const objects = [...arrowLeft];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowLeft(objects);
    }

    const addArrowBottomToLeft = () => {
        setRemove(false);
        const objects = [...arrowBottomToLeft];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowBottomToLeft(objects);
    }

    const addArrowBottomToRight = () => {
        setRemove(false);
        const objects = [...arrowBottomToRight];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowBottomToRight(objects);
    }

    const addArrowBottom = () => {
        setRemove(false);
        const objects = [...arrowBottom];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setArrowBottom(objects);
    }

    const addBotoeira = () => {
        setRemove(false);
        const objects = [...objBotoeira];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setObjBotoeira(objects);
    }

    const addOcupacao = () => {
        setRemove(false);
        const objects = [...objOcupacao];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setObjOcupacao(objects);
    }

    const addDetector = () => {
        setRemove(false);
        const objects = [...objDetector];
        objects.push({id: objects.length, top: 44.89, left: 48.22 , tamanho: 100, velocidade: 5, percurso: 30});
        setObjDetector(objects);
    }


    //funções para remever objetos em tela
    const removeAll = () => {
        setCarRight([]);
        setCarTop([]);
        setCarLeft([]);
        setCarBottom([]);
        setCarTopToRight([]);
        setCarTopToLeft([]);
        setCarRightToBottom([]);
        setCarLeftToBottom([]);
        setCarLeftToTop([]);
        setCarRightToTop([]);
        setCarBottomToLeft([]);
        setCarBottomToRight([]);
        setObjSemaforo([]);
        setWalkLeft([]);
        setWalkRight([]);
        setWalkBottom([]);
        setWalkTop([]);
        setArrowTopToRight([]);
        setArrowTop([]);
        setArrowRight([]);
        setArrowRightToTop([]);
        setArrowLeftToBottom([]);
        setArrowLeftToTop([]);
        setArrowBottomToLeft([]);
        setArrowBottomToRight([]);
        setArrowBottom([]);
        setArrowRightToBottom([]);
        setObjBotoeira([]);
        setObjSemaforo([]);
        setObjSemaforoLeft([]);
        setObjSemaforoRight([]);
        setObjOcupacao([]);
        setObjDetector([]);
        setOpenModal(false);
    }

    const removeCarRight = (item, index) => {
        const objects = [...carRight];
        objects[objects.indexOf(index)] = '';
        setCarRight(objects.filter(Boolean));
    }

    const removeCarTop = (item, index) => {
        const objects = [...carTop];
        objects[objects.indexOf(index)] = '';
        setCarTop(objects.filter(Boolean));
    }

    const removeCarLeft = (item, index) => {
        const objects = [...carLeft];
        objects[objects.indexOf(index)] = '';
        setCarLeft(objects.filter(Boolean));
    }

    const removeSemaforo = (item, index) => {
        const objects = [...objSemaforo];
        objects[objects.indexOf(index)] = '';
        setObjSemaforo(objects.filter(Boolean));
    }

    const removeBotoeira = (item, index) => {
        const objects = [...objBotoeira];
        objects[objects.indexOf(index)] = '';
        setObjBotoeira(objects.filter(Boolean));
    }

    const removeSemaforoLeft = (item, index) => {
        const objects = [...objSemaforoLeft];
        objects[objects.indexOf(index)] = '';
        setObjSemaforoLeft(objects.filter(Boolean));
    }

    const removeSemaforoRight = (items, index) => {
        const objects = [...objSemaforoRight];
        objects[objects.indexOf(index)] = '';
        setObjSemaforoRight(objects.filter(Boolean));
    }

    const removeCarBottom = (item, index) => {
        const objects = [...carBottom];
        objects[objects.indexOf(index)] = '';
        setCarBottom(objects.filter(Boolean));
    }

    const removeCarTopToRight = (item, index) => {
        const objects = [...carTopToRight];
        objects[objects.indexOf(index)] = '';
        setCarTopToRight(objects.filter(Boolean));
    }

    const removeCarTopToLeft = (item, index) => {
        const objects = [...carTopToLeft];
        objects[objects.indexOf(index)] = '';
        setCarTopToLeft(objects.filter(Boolean));
    }

    const removeRightToTop = (item, index) => {
        const objects = [...carRightToTop];
        objects[objects.indexOf(index)] = '';
        setCarRightToTop(objects.filter(Boolean));
    }

    const removeLeftToTop = (item, index) => {
        const objects = [...carLeftToTop];
        objects[objects.indexOf(index)] = '';
        setCarLeftToTop(objects.filter(Boolean));
    }

    const removeRightToBottom = (item, index) => {
        const objects = [...carRightToBottom];
        objects[objects.indexOf(index)] = '';
        setCarRightToBottom(objects.filter(Boolean));
    }

    const removeLeftToBottom = (item, index) => {
        const objects = [...carLeftToBottom];
        objects[objects.indexOf(index)] = '';
        setCarLeftToBottom(objects.filter(Boolean));
    }

    const removeBottomToLeft = (items,index) => {
        const objects = [...carBottomToLeft];
        objects[objects.indexOf(index)] = '';
        setCarBottomToLeft(objects.filter(Boolean));
    }

    const removeBottomToRight = (items, index) => {
        const objects = [...carBottomToRight];
        objects[objects.indexOf(index)] = '';
        setCarBottomToRight(objects.filter(Boolean));
    }

    const removeWalkLeft = (item, index) => {
        const objects = [...walkLeft];
        objects[objects.indexOf(index)] = '';
        setWalkLeft(objects.filter(Boolean));
    }

    const removeWalkRight = (item, index) => {
        const objects = [...walkRight];
        objects[objects.indexOf(index)] = '';
        setWalkRight(objects.filter(Boolean));
    }

    const removeWalkBottom = (item, index) => {
        const objects = [...walkBottom];
        objects[objects.indexOf(index)] = '';
        setWalkBottom(objects.filter(Boolean));
    }

    const removeWalkTop = (item, index) => {
        const objects = [...walkTop];
        objects[objects.indexOf(index)] = '';
        setWalkTop(objects.filter(Boolean));
    }

    const removeArrowTopToRight = (item, index) => {
        const objects = [...arrowTopToRight];
        objects[objects.indexOf(index)] = '';
        setArrowTopToRight(objects.filter(Boolean));
    }

    const removeArrowTopToLeft = (item, index) => {
        const objects = [...arrowTopToLeft];
        objects[objects.indexOf(index)] = '';
        setArrowTopToLeft(objects.filter(Boolean));
    }

    const removeArrowTop = (item, index) => {
        const objects = [...arrowTop];
        objects[objects.indexOf(index)] = '';
        setArrowTop(objects.filter(Boolean));
    }

    const removeArrowRightToBottom = (item, index) => {
        const objects = [...arrowRightToBottom];
        objects[objects.indexOf(index)] = '';
        setArrowRightToBottom(objects.filter(Boolean));
    }

    const removeArrowRightToTop = (item, index) => {
        const objects = [...arrowRightToTop];
        objects[objects.indexOf(index)] = '';
        setArrowRightToTop(objects.filter(Boolean));
    }

    const removeArrowRight = (item, index) => {
        const objects = [...arrowRight];
        objects[objects.indexOf(index)] = '';
        setArrowRight(objects.filter(Boolean));
    }

    const removeArrowLeftToBottom = (items, index) => {
        const objects = [...arrowLeftToBottom];
        objects[objects.indexOf(index)] = '';
        setArrowLeftToBottom(objects.filter(Boolean));
    }

    const removeArrowLeftToTop = (items, index) => {
        const objects = [...arrowLeftToTop];
        objects[objects.indexOf(index)] = '';
        setArrowLeftToTop(objects.filter(Boolean));
    }

    const removeArrowLeft = (items, index) => {
        const objects = [...arrowLeft];
        objects[objects.indexOf(index)] = '';
        setArrowLeft(objects.filter(Boolean));
    }

    const removeArrowBottomToLeft = (items, index) => {
        const objects = [...arrowBottomToLeft];
        objects[objects.indexOf(index)] = '';
        setArrowBottomToLeft(objects.filter(Boolean));
    }

    const removeArrowBottomToRight = (items, index) => {
        const objects = [...arrowBottomToRight];
        objects[objects.indexOf(index)] = '';
        setArrowBottomToRight(objects.filter(Boolean));
    }

    const removeArrowBottom = (items, index) => {
        const objects = [...arrowBottom];
        objects[objects.indexOf(index)] = '';
        setArrowBottom(objects.filter(Boolean));
    }

    const removeOcupacao = (items, index) => {
        const objects = [...objOcupacao];
        objects[objects.indexOf(index)] = '';
        setObjOcupacao(objects.filter(Boolean));
    }

    const removeDetector = (item,index) => {
        const objects = [...objDetector];
        objects[objects.indexOf(index)] = '';
        setObjDetector(objects.filter(Boolean));
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
        setMoveBottomToLeft(true);
        setMoveBottomToRight(true);
        setMoveWalkLeft(true);
        setMoveWalkRight(true);
        setMoveWalkBottom(true);
        setMoveWalkTop(true);
        setMoveArrowTop(true);
        setMoveArrowRight(true);
        setMoveArrowLeft(true);
        setMoveArrowTopToRight(true);
        setMoveArrowTopToLeft(true);
        setMoveArrowRightToBottom(true);
        setMoveArrowRightToTop(true);
        setMoveArrowLeftBottom(true);
        setMoveArrowLeftToTop(true);
        setMoveArrowBottomToLeft(true);
        setMoveArrowBottomToRight(true);
        setMoveArrowBottom(true);
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
        setMoveBottomToLeft(false);
        setMoveBottomToRight(false);
        setMoveWalkLeft(false);
        setMoveWalkRight(false);
        setMoveWalkBottom(false);
        setMoveWalkTop(false);
        setMoveArrowTop(false);
        setMoveArrowRight(false);
        setMoveArrowLeft(false);
        setMoveArrowTopToRight(false);
        setMoveArrowTopToLeft(false);
        setMoveArrowRightToBottom(false);
        setMoveArrowRightToTop(false);
        setMoveArrowLeftBottom(false);
        setMoveArrowLeftToTop(false);
        setMoveArrowBottomToLeft(false);
        setMoveArrowBottomToRight(false);
        setMoveArrowBottom(false);
        setRemove(false);

        //pause() // inserido aqui temporariamente, criar uma lógica para sinal vermelho e chamar essa função, logo após remover ela daqui
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
        setMoveBottomToLeft('pause');
        setMoveBottomToRight('pause');
        setMoveWalkLeft('pause');
        setMoveWalkRight('pause');
        setMoveWalkBottom('pause');
        setMoveWalkTop('pause');
        setMoveArrowTop('pause');
        setMoveArrowRight('pause');
        setMoveArrowLeft('pause');
        setMoveArrowTopToRight('pause');
        setMoveArrowTopToLeft('pause');
        setMoveArrowRightToBottom('pause');
        setMoveArrowRightToTop('pause');
        setMoveArrowLeftBottom('pause');
        setMoveArrowLeftToTop('pause');
        setMoveArrowBottomToLeft('pause');
        setMoveArrowBottomToRight('pause');
        setMoveArrowBottom('pause');
        setRemove(false);
    }

    //play e stop de animações

    const activeAnimate = () => {
        if(statusPlay === 'stop'){
            playAnimate();
            setStatusPlay('play');
            console.log(moveArrowTopToRight)
        }else{
            stopAnimate();
            setStatusPlay('stop');
        }
    }

    //habilitar icone de excluir objeto
    const enabledClose = () => {
		setStatusPlay('stop');
        stopAnimate();
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
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypesTopRigth(false);
            }
        }
        if(name === 'top-left'){
            if(openTypesTopLeft === false){
                setOpenTypesTopLeft(true);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypesTopLeft(false);
            }
        }
        if(name === 'top'){
            if(openTypesTop === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(true);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypesTop(false);
            }
        }
        if(name === 'right-down'){
            if(openTypeRigthToBottom === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(true);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setopenTypeRigthToBottom(false);
            }
        }
        if(name === 'right-top'){
            if(openTypeRigthToTop === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(true);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeRigthToTop(false);
            }
        }
        if(name === 'right'){
            if(openTypeRight === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(true);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeRight(false);
            }
        }
        if(name === 'left-bottom'){
            if(openTypeLeftToBottom === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(true);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeLeftToBottom(false);
            }
        }
        if(name === 'left-top'){
            if(openTypeLeftToTop === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(true);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeLeftToTop(false);
            }
        }
        if(name === 'left'){
            if(openTypeLeft === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(true);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeLeft(false);
            }
        }
        if(name === 'down-left'){
            if(openTypeBottomToLeft === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(true);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeBottomToLeft(false);
            }
        }
        if(name === 'down-right'){
            if(openTypeBottomToRight === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(true);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeBottomToRight(false);
            }
        }
        if(name === 'down'){
            if(openTypeBottom === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(true);
                setOpenTypeSemaforo(false);
            }else{
                setOpenTypeBottom(false);
            }
        }
        if(name === 'semaforo'){
            if(openTypeSemaforo === false){
                setOpenTypesTopLeft(false);
                setOpenTypesTopRigth(false);
                setOpenTypesTop(false);
                setopenTypeRigthToBottom(false);
                setOpenTypeRigthToTop(false);
                setOpenTypeRight(false);
                setOpenTypeLeftToBottom(false);
                setOpenTypeLeftToTop(false);
                setOpenTypeLeft(false);
                setOpenTypeBottomToLeft(false);
                setOpenTypeBottomToRight(false);
                setOpenTypeBottom(false);
                setOpenTypeSemaforo(true);

            }else{
                setOpenTypeSemaforo(false);
            }
        }
    }

    return (
        <Container>
            <AreaMapaCroqui>
                <MapaCroqui>
                    <img src={MapaCroqui02} alt="" />
                </MapaCroqui>
                <ButtonOpen onClick={() => openDrawer()} title={openTools === false ? 'Abrir editor' : 'Fechar editor'}>
                    <GiHamburgerMenu size={35} color={openTools === false ? '#062467' : '#FFF'} />
                </ButtonOpen>
                <CarRight carRight={carRight} setCarRight={setCarRight} moveRight={moveRight}
                    setMoveRight={setMoveRight} remove={remove} removeCarRight={removeCarRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarTop carTop={carTop} setCarTop={setCarTop} moveTop={moveTop}
                    setMoveTop={setMoveTop} remove={remove} removeCarTop={removeCarTop} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarLeft carLeft={carLeft} setCarLeft={setCarLeft} moveLeft={moveLeft}
                    setMoveLeft={setMoveLeft} remove={remove} removeCarLeft={removeCarLeft} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarBottom carBottom={carBottom} setCarBottom={setCarBottom} moveBottom={moveBottom}
                    setMoveBottom={setMoveBottom} remove={remove} removeCarBottom={removeCarBottom} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarTopToRight carTopToRight={carTopToRight} setCarTopToRight={setCarTopToRight} moveTopToRight={moveTopToRight}
                    setMoveTopToRight={setMoveTopToRight} remove={remove} removeCarTopToRight={removeCarTopToRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarTopToLeft carTopToLeft={carTopToLeft} setCarTopToLeft={setCarTopToLeft} moveTopToLeft={moveTopToLeft}
                    setMoveTopToLeft={setMoveTopToLeft} remove={remove} removeCarTopToLeft={removeCarTopToLeft}  setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarRightToBottom carRightToBottom={carRightToBottom} setCarRightToBottom={setCarRightToBottom} moveRightToBottom={moveRightToBottom}
                    setMoveRightToBottom={setMoveRightToBottom} remove={remove} removeRightToBottom={removeRightToBottom} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarLeftToBottom carLeftToBottom={carLeftToBottom} setCarLeftToBottom={setCarLeftToBottom} moveLeftToBottom={moveLeftToBottom}
                    setMoveLeftToBottom={setMoveLeftToBottom} remove={remove} removeLeftToBottom={removeLeftToBottom} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarRightToTop carRightToTop={carRightToTop} setCarRightToTop={setCarRightToTop} moveRightToTop={moveRightToTop}
                    setMoveRightToTop={setMoveRightToTop} remove={remove} removeRightToTop={removeRightToTop} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarLeftToTop carLeftToTop={carLeftToTop} setCarLeftToTop={setCarLeftToTop} moveLeftToTop={moveLeftToTop}
                    setMoveLeftToTop={setMoveLeftToTop} remove={remove} removeLeftToTop={removeLeftToTop} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarBottomToLeft carBottomToLeft={carBottomToLeft} setCarBottomToLeft={setCarBottomToLeft} moveBottomToLeft={moveBottomToLeft}
                    setMoveBottomToLeft={setMoveBottomToLeft} remove={remove} removeBottomToLeft={removeBottomToLeft} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <CarBottomToRight carBottomToRight={carBottomToRight} setCarBottomToRight={setCarBottomToRight} moveBottomToRight={moveBottomToRight}
                    setMoveBottomToRight={setMoveBottomToRight} remove={remove} removeBottomToRight={removeBottomToRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <SemaforoFront objSemaforo={objSemaforo} setObjSemaforo={setObjSemaforo}
                    remove={remove} removeSemaforo={removeSemaforo} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <SemaforoLeft objSemaforoLeft={objSemaforoLeft} setObjSemaforoLeft={setObjSemaforoLeft}
                    remove={remove} removeSemaforoLeft={removeSemaforoLeft} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <SemaforoRight objSemaforoRight={objSemaforoRight} setObjSemaforoRight={setObjSemaforoRight}
                    remove={remove} removeSemaforoRight={removeSemaforoRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <WalkLeft walkLeft={walkLeft} setWalkLeft={setWalkLeft} moveWalkLeft={moveWalkLeft}
                    setMoveWalkLeft={setMoveWalkLeft} remove={remove} removeWalkLeft={removeWalkLeft} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <WalkRight walkRight={walkRight} setWalkRight={setWalkRight} moveWalkRight={moveWalkRight}
                    setMoveWalkRight={setMoveWalkRight} remove={remove} removeWalkRight={removeWalkRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <WalkBottom walkBottom={walkBottom} setWalkBottom={setWalkBottom} moveWalkBottom={moveWalkBottom}
                    setMoveWalkBottom={setMoveWalkBottom} remove={remove} removeWalkBottom={removeWalkBottom} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <WalkTop walkTop={walkTop} setWalkTop={setWalkTop} moveWalkTop={moveWalkTop}
                    setMoveWalkTop={setMoveWalkTop} remove={remove} removeWalkTop={removeWalkTop} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowTopToRight arrowTopToRight={arrowTopToRight} setArrowTopToRight={setArrowTopToRight}
                    remove={remove} moveArrowTopToRight={moveArrowTopToRight} removeArrowTopToRight={removeArrowTopToRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowTopToLeft arrowTopToLeft={arrowTopToLeft} setArrowTopToLeft={setArrowTopToLeft}
                    remove={remove} removeArrowTopToLeft={removeArrowTopToLeft} moveArrowTopToLeft={moveArrowTopToLeft} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowTop arrowTop={arrowTop} setArrowTop={setArrowTop} moveArrowTop={moveArrowTop}
                    setMoveArrowTop={setMoveArrowTop} remove={remove} removeArrowTop={removeArrowTop} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowRight arrowRight={arrowRight} setArrowRight={setArrowRight} moveArrowRight={moveArrowRight}
                    setMoveArrowRight={setMoveArrowRight} remove={remove} removeArrowRight={removeArrowRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowRightToBottom arrowRightToBottom={arrowRightToBottom} setArrowRightToBottom={setArrowRightToBottom}
                    remove={remove} removeArrowRightToBottom={removeArrowRightToBottom} moveArrowRightToBottom={moveArrowRightToBottom}
					setOpenSettings={setOpenSettings} setPropsSettings={setPropsSettings}
                />
                <ArrowRightToTop arrowRightToTop={arrowRightToTop} setArrowRightToTop={setArrowRightToTop}
                    remove={remove} removeArrowRightToTop={removeArrowRightToTop} moveArrowRightToTop={moveArrowRightToTop} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowLeftToBottom arrowLeftToBottom={arrowLeftToBottom} setArrowLeftToBottom={setArrowLeftToBottom}
                    remove={remove} removeArrowLeftToBottom={removeArrowLeftToBottom} moveArrowLeftToBottom={moveArrowLeftToBottom} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowLeftToTop arrowLeftToTop={arrowLeftToTop} setArrowLeftToTop={setArrowLeftToTop}
                    remove={remove} removeArrowLeftToTop={removeArrowLeftToTop} moveArrowLeftToTop={moveArrowLeftToTop} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowLeft arrowLeft={arrowLeft} setArrowLeft={setArrowLeft} moveArrowLeft={moveArrowLeft}
                    setMoveArrowLeft={setMoveArrowLeft} remove={remove} removeArrowLeft={removeArrowLeft} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowBottomToLeft arrowBottomToLeft={arrowBottomToLeft} setArrowBottomToLeft={setArrowBottomToLeft}
                    remove={remove} removeArrowBottomToLeft={removeArrowBottomToLeft} moveArrowBottomToLeft={moveArrowBottomToLeft} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowBottomToRight arrowBottomToRight={arrowBottomToRight} setArrowBottomToRight={setArrowBottomToRight}
                    remove={remove} removeArrowBottomToRight={removeArrowBottomToRight} moveArrowBottomToRight={moveArrowBottomToRight} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ArrowBottom arrowBottom={arrowBottom} setArrowBottom={setArrowBottom} moveArrowBottom={moveArrowBottom}
                    setMoveArrowBottom={setMoveArrowBottom} remove={remove} removeArrowBottom={removeArrowBottom} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <Botoeira objBotoeira={objBotoeira} setObjBotoeira={setObjBotoeira}
                    remove={remove} removeBotoeira={removeBotoeira} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <Ocupacao objOcupacao={objOcupacao} setObjOcupacao={setObjOcupacao}
                    remove={remove} removeOcupacao={removeOcupacao} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <Detector objDetector={objDetector} setObjDetector={setObjDetector}
                    remove={remove} removeDetector={removeDetector} setOpenSettings={setOpenSettings}
                    setPropsSettings={setPropsSettings}
                />
                <ModalConfirm openModal={openModal} setOpenModal={setOpenModal} removeAll={removeAll}/>

                <Settings
					type={propsSettings.type}
                    title={propsSettings.title}
                    open={openSettings}
                    close={setOpenSettings}
                    imgObject={propsSettings.image}
                    object={propsSettings.object}
                    setObject={propsSettings.setObject}
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
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('top-right')}><Img id='top-right' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='topToright' openTypes={openTypesTopRigth} setOpenTypes={setOpenTypesTopRigth} addObject={addCarTopToRight} addObjectArrow={addArrowTopToRight}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('top-left')}><Img id='top-left' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='topToleft' openTypes={openTypesTopLeft} setOpenTypes={setOpenTypesTopLeft} addObject={addCarTopToLeft} addObjectArrow={addArrowTopToLeft}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('top')}><Img id='top' src={arrow} alt='' /></Buttom>
                                    <MenuType name='top' openTypes={openTypesTop} setOpenTypes={setOpenTypesTop} addObject={addCarTop} addObjectArrow={addArrowTop}/>
                                </OptionButton>
                                <Buttom onClick={addWalkTop}><Img id='top-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Direita</Legend>
                            <AreaButtons>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('right-down')}><Img id='right-down' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='rightToDown' openTypes={openTypeRigthToBottom} setOpenTypes={setopenTypeRigthToBottom} addObject={addCarRightToBottom} addObjectArrow={addArrowRightToBottom}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('right-top')}><Img id='right-top' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='rightTotop' openTypes={openTypeRigthToTop} setOpenTypes={setOpenTypeRigthToTop} addObject={addCarRightToTop} addObjectArrow={addArrowRightToTop}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('right')}><Img id='right' src={arrow} alt='' /></Buttom>
                                    <MenuType name='right' openTypes={openTypeRight} setOpenTypes={setOpenTypeRight} addObject={addCarRight} addObjectArrow={addArrowRight}/>
                                </OptionButton>
                                <Buttom onClick={addWalkRight}><Img id='right-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Esquerda</Legend>
                            <AreaButtons>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('left-bottom')}><Img id='left-down' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='leftToBottom' openTypes={openTypeLeftToBottom} setOpenTypes={setOpenTypeLeftToBottom} addObject={addCarLeftToBottom} addObjectArrow={addArrowLeftToBottom}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('left-top')}><Img id='left-top' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='leftToTop' openTypes={openTypeLeftToTop} setOpenTypes={setOpenTypeLeftToTop} addObject={addCarLeftToTop} addObjectArrow={addArrowLeftToTop}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('left')}><Img id='left' src={arrow} alt='' /></Buttom>
                                    <MenuType name='left' openTypes={openTypeLeft} setOpenTypes={setOpenTypeLeft} addObject={addCarLeft} addObjectArrow={addArrowLeft}/>
                                </OptionButton>
                                <Buttom onClick={addWalkLeft}><Img id='left-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Baixo</Legend>
                            <AreaButtons>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('down-left')}><Img id='down-left' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='bottomToLeft' openTypes={openTypeBottomToLeft} setOpenTypes={setOpenTypeBottomToLeft} addObject={addCarBottomToLeft} addObjectArrow={addArrowBottomToLeft} />
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('down-right')}><Img id='down-right' src={arrowSide} alt='' /></Buttom>
                                    <MenuType name='bottomToRight' openTypes={openTypeBottomToRight} setOpenTypes={setOpenTypeBottomToRight} addObject={addCarBottomToRight} addObjectArrow={addArrowBottomToRight}/>
                                </OptionButton>
                                <OptionButton>
                                    <Buttom onClick={() => openTypes('down')}><Img id='down' src={arrow} alt='' /></Buttom>
                                    <MenuType name='bottom' openTypes={openTypeBottom} setOpenTypes={setOpenTypeBottom} addObject={addCarBottom} addObjectArrow={addArrowBottom}/>
                                </OptionButton>
                                <Buttom onClick={addWalkBottom}><Img id='down-pedestre' src={pedestre} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Outros</Legend>
                            <AreaButtons>
                            <OptionButton>
                                <Buttom onClick={() => openTypes('semaforo')}><Img id='icoSemaforo' src={icoSemaforo} alt='' /></Buttom>
                                <MenuTypeSemaforo name='semaforo' openTypes={openTypeSemaforo} setOpenTypes={setOpenTypeSemaforo}
                                    addObject={addSemaforo} addObjectLeft={addSemaforoLeft} addObjectRight={addSemaforoRight}
                                />
                            </OptionButton>
                                <Buttom onClick={addBotoeira}><Img id='' src={botoeiraIco} alt='' /></Buttom>
                                <Buttom onClick={addOcupacao}><Img id='' src={icoTaxa} alt='' /></Buttom>
                                <Buttom onClick={addDetector}><Img id='' src={icoContagem} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Animação</Legend>
                            <AreaButtons>
                                <Buttom onClick={activeAnimate}><Img id='play' src={statusPlay === 'stop' ? play : pauseSwitch} alt='' /></Buttom>
                                <Buttom onClick={enabledClose}><Img id='settings' src={icoSettings} alt='' /></Buttom>
                                <Buttom><Img id='close' src={''} alt='' /></Buttom>
                                <Buttom onClick={modalStatus} title='Limpar tudo'><Img id='clear' src={clear} alt='' /></Buttom>
                            </AreaButtons>
                        </Fieldset>
                    </AreaTools>
                </Editor>
            </AreaEditor>
        </Container>
    );
}
