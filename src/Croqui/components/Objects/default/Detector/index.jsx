import React, { useState } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import close from '../../../img/close.png';
import icoDetector from '../../../img/icoDetector.png';
import settings from '../../../img/tool.png';
import { Container, AreaDetector, QntTotal, Options, ButtonSettings } from './styles';

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

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'box', title: 'Detector', image: icoDetector, object: props.objDetector, setObject: props.setObjDetector});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.objDetector.map((item,index) => {
                if(props.objDetector[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='objDetector' top={item.top} left={item.left} setObjDetector={props.setObjDetector} objDetector={props.objDetector}>
                            <AreaDetector total={total} tamanho={item.tamanho}>
                                <QntTotal total={total}>{total}</QntTotal>
                            </AreaDetector>
                            <Options remove={props.remove} onClick={() => props.removeDetector(index,item)}>
                                <img src={close} alt="" />
                            </Options>
							<ButtonSettings remove={props.remove}>
								<img src={settings} alt="" onClick={() => insertConfigModalSettings(index)}/>
							</ButtonSettings>
                        </ItemDraggable>
                    );
                }else{
                    return null;
                }
            })}
        </Container>
    );
}
