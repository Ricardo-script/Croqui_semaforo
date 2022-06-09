import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import botoeira from '../../../img/botoeira.png';
import close from '../../../img/close.png';
import { Container, Img, Options } from './styles';

export default function Botoeira(props){  
    
    return(
        <Container>
            {props.objBotoeira.map((item,index) => {
                if(props.objBotoeira[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='objBotoeira' top={item.top} left={item.left} setObjBotoeira={props.setObjBotoeira} objBotoeira={props.objBotoeira}>
                            <Img src={botoeira} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeBotoeira(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }else{
                    return null;
                }
            })}
        </Container>
    );
}

