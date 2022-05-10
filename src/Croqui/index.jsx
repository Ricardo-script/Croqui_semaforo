import React, { useState, useRef, useEffect } from 'react';
import { Container, AreaMapaCroqui, ButtonOpen, MapaCroqui, AreaEditor, Editor, Header, AreaTools, Fieldset, Legend, AreaButtons, Buttom, Img} from './styles';
import { GiHamburgerMenu } from "react-icons/gi";
import CarRight from './components/Objects/CarRight';
import CarTop from './components/Objects/CarTop';
import mapa from './components/img/mapaCroqui.jpg';
import cruzamento from './components/img/cruzamento.png';
import logo from './components/img/logoCroqui.svg';
import arrow from './components/img/arrow.png';
import arrowSide from './components/img/arrow-side.png';
import pedestre from './components/img/pedestre.png';


export default function Croqui() {

    const [limitScrean, setLimitScrean] = useState();
    const [openTools, setOpenTools] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const ref = useRef();  

    const openDrawer = () => {
        if(openTools){
            setOpenTools(false);
        }else{
            setOpenTools(true);
        }
    }
    
    useEffect(() => {
        setLimitScrean(ref.current.offsetWidth - 70)
    },[limitScrean]);

    document.body.onresize = function() {
        if (document.body.clientWidth < 1980) {
            setLimitScrean(ref.current.offsetWidth - 70);
        }
    };

	return (
        <Container>
            <AreaMapaCroqui ref={ref}>
                <MapaCroqui>
                   <img src={cruzamento} alt="" />
                </MapaCroqui>
                <ButtonOpen onClick={() => openDrawer()} title={openTools === false ? 'Abrir editor' : 'Fechar editor'}>
                    <GiHamburgerMenu size={35} color={openTools === false ? '#062467' : '#FFF'}/>
                </ButtonOpen>
                
                <CarRight />
                <CarTop />
                

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
                                <Buttom><Img id='top-right' src={arrowSide} alt=''/></Buttom>
                                <Buttom><Img id='top-left' src={arrowSide} alt=''/></Buttom>
                                <Buttom><Img id='top' src={arrow} alt=''/></Buttom>
                                <Buttom><Img id='top-pedestre' src={pedestre} alt=''/></Buttom>
                            </AreaButtons>
                        </Fieldset>
                        <Fieldset>
                            <Legend>Direita</Legend>
                            <AreaButtons>
                                <Buttom><Img id='right-down' src={arrowSide} alt=''/></Buttom>
                                <Buttom><Img id='right-top' src={arrowSide} alt=''/></Buttom>
                                <Buttom><Img id='right' src={arrow} alt=''/></Buttom>
                                <Buttom><Img id='right-pedestre' src={pedestre} alt=''/></Buttom>
                            </AreaButtons>
                        </Fieldset>
                    </AreaTools>
                </Editor>
            </AreaEditor>
        </Container>
	);
}