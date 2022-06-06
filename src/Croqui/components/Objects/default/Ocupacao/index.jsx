import React, { useState } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import close from '../../../img/close.png';
import { Container, AreaOcupacao, TaxaOcupacao, Options } from './styles';

export default function Ocupacao(props){  

    const [taxa, setTaxa] = useState('33%')
    
    return(
        <Container>
            {props.objOcupacao.map((item,index) => {
                if(props.objOcupacao[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='objOcupacao' top={item.top} left={item.left} setObjOcupacao={props.setObjOcupacao} objOcupacao={props.objOcupacao}>
                            <AreaOcupacao>
                                <TaxaOcupacao>{taxa}</TaxaOcupacao>
                            </AreaOcupacao>
                            <Options remove={props.remove} onClick={() => props.removeOcupacao(index,item)}>
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
