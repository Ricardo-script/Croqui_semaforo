import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import subindo from '../../../img/subindo.png';
import direita from '../../../img/direita.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTopToRight, Options, ButtonSettings } from './styles';

export default function CarTopToRight(props){ 
    
    const insertConfigModalSettings = () => {
        props.setPropsSettings({title: 'Carro subindo vira a direita', image: direita, object: props.carTopToRight, setObject: props.setCarTopToRight});
        props.setOpenSettings(true);
    }
    
    return(
        <Container>
            {props.carTopToRight.map((item,index) => {
                if(props.carTopToRight[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carTopToRight' top={item.top} left={item.left} setCarTopToRight={props.setCarTopToRight} carTopToRight={props.carTopToRight}>
                            <MoveTopToRight src={subindo} alt="" move={props.moveTopToRight} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeCarTopToRight(index,item)}>
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