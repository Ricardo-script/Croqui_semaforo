import React, { useState, useEffect } from 'react';
import ItemDraggable from '../../../ItemDraggable';
import close from '../../../img/close.png';
import icoOcupacao from '../../../img/icoOcupacao.png';
import settings from '../../../img/tool.png';
import { Container, AreaOcupacao, TaxaOcupacao, Options, ButtonSettings } from './styles';

export default function Ocupacao(props){

	useEffect(() => {
		setTimeout(() => {
			if(props.taxaOcupacao === 33){
				props.setTaxaOcupacao(40)
			}
			if(props.taxaOcupacao > 33){
				props.setTaxaOcupacao(65)
			}
			if(props.taxaOcupacao < 65){
				props.setTaxaOcupacao(65)
			}
			if(props.taxaOcupacao === 65){
				props.setTaxaOcupacao(80)
			}
			if(props.taxaOcupacao === 80){
				props.setTaxaOcupacao(33)
			}
		},7000);
	},[props.taxaOcupacao]);

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
                            <AreaOcupacao taxa={props.taxaOcupacao} tamanho={item.tamanho} angulo={item.angulo}>
                                <TaxaOcupacao>{props.taxaOcupacao}%</TaxaOcupacao>
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
