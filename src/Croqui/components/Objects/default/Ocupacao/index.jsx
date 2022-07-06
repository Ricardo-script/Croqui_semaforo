import React, { useState, useEffect } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import close from '../../../img/close.png';
import icoOcupacao from '../../../img/icoOcupacao.png';
import settings from '../../../img/tool.png';
import { Container, AreaOcupacao, TaxaOcupacao, Options, ButtonSettings } from './styles';

export default function Ocupacao(props){

    const [taxa, setTaxa ] = useState(33);

	useEffect(() => {
		setTimeout(() => {
			if(taxa === 33){
				setTaxa(40)
			}
			if(taxa > 33){
				setTaxa(65)
			}
			if(taxa === 65){
				setTaxa(33)
			}
		},3000);
	},[taxa]);

	const insertConfigModalSettings = (index) => {
        props.setPropsSettings({ index: index, type: 'box', title: 'Taxa de ocupação', image: icoOcupacao, object: props.objOcupacao, setObject: props.setObjOcupacao});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.objOcupacao.map((item,index) => {
                if(props.objOcupacao[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='objOcupacao' top={item.top} left={item.left} setObjOcupacao={props.setObjOcupacao} objOcupacao={props.objOcupacao}>
                            <AreaOcupacao taxa={taxa} tamanho={item.tamanho} angulo={item.angulo}>
                                <TaxaOcupacao>{taxa}%</TaxaOcupacao>
                            </AreaOcupacao>
                            <Options remove={props.remove} onClick={() => props.removeOcupacao(index,item)}>
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
