import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import subindo from '../../../img/subindo.png';
import direita from '../../../img/direita.png';
import close from '../../../img/close.png';
import settings from '../../../img/tool.png';
import { Container, MoveTop, Options, ButtonSettings} from './styles';

export default function CarTop(props){

	const insertConfigModalSettings = () => {
        props.setPropsSettings({ type: 'car', title: 'Carro subindo', image: direita, object: props.carTop, setObject: props.setCarTop});
        props.setOpenSettings(true);
    }

    return(
        <Container>
            {props.carTop.map((item,index) => {
                if(props.carTop[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carTop' top={item.top} left={item.left} setCarTop={props.setCarTop} carTop={props.carTop}>
                            <MoveTop src={subindo} alt="" move={props.moveTop} tamanho={item.tamanho} velocidade={item.velocidade} percurso={item.percurso}/>
                            <Options remove={props.remove} onClick={() => props.removeCarTop(index,item)}>
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
