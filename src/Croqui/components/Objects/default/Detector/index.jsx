import React, { useState } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import close from '../../../img/close.png';
import { Container, AreaDetector, QntTotal, Options } from './styles';

export default function Detector(props){  

    const [total, setTotal] = useState(3);

   setTimeout(() => {
        if(total === 3){
            setTotal(1);
            return;
        }
        if(total === 1){
            setTotal(2);
            return;
        }
        if(total === 2){
            setTotal(3);
            return;
        }
    },3000);
    
    return(
        <Container>
            {props.objDetector.map((item,index) => {
                if(props.objDetector[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='objDetector' top={item.top} left={item.left} setObjDetector={props.setObjDetector} objDetector={props.objDetector}>
                            <AreaDetector total={total}>
                                <QntTotal total={total}>{total}</QntTotal>
                            </AreaDetector>
                            <Options options={props.options} onClick={() => props.optionsDetector(index,item)}>
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
