import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import subindo from '../../../img/subindo.png';
import car from '../../../img/direita.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTopToLeft, Options, ButtonSettings } from './styles';

export default function CarTopToLeft(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'car', title: 'Carro subindo vira a esquerda', image: car, object: props.carTopToLeft, setObject: props.setCarTopToLeft});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carTopToLeft.map((item,index) => {
                if(props.carTopToLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carTopToLeft' top={item.top} left={item.left} setCarTopToLeft={props.setCarTopToLeft} carTopToLeft={props.carTopToLeft}>
                            <MoveTopToLeft src={subindo} alt="" move={props.moveTopToLeft} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso} nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn/>
                            <Options remove={props.remove} onClick={() => props.removeCarTopToLeft(index,item)}>
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
