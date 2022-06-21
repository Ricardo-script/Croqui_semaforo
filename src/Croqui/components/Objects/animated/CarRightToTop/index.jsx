import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import direita from '../../../img/direita.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveRightToTop, Options, ButtonSettings } from './styles';

export default function CarRightToTop(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'car', title: 'Carro sobe à direita', image: direita, object: props.carRightToTop, setObject: props.setCarRightToTop});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carRightToTop.map((item,index) => {
                if(props.carRightToTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carRightToTop' top={item.top} left={item.left} setCarRightToTop={props.setCarRightToTop} carRightToTop={props.carRightToTop}>
                            <MoveRightToTop src={direita} alt="" move={props.moveRightToTop} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeRightToTop(index,item)}>
                                <img src={close} alt="" />
                            </Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={insertConfigModalSettings}/>
							</ButtonSettings>
                        </ItemDraggable>
                    );
                }else{
                    return '';
                }
            })}
        </Container>
    );
}
