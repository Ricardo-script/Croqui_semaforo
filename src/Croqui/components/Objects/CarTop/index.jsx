import React, { useState } from 'react';
import ItemDraggable from '../../ItemDraggable';
import subindo from '../../img/subindo.png';
import { Container, MoveTop } from './styles';

export default function CarTop(){

    const [moveTop, setMoveTop] = useState(false);
    const [carTop, setCarTop] = useState([{ top: 73, left: 46}]);
    

    return(
        <Container>
            {carTop.map((item,index) => (
                <ItemDraggable key={index} index={index} object='carTop' top={item.top} left={item.left} setCarTop={setCarTop} carTop={carTop}>
                    <MoveTop src={subindo} alt="" move={carTop} onClick={() => setMoveTop(true)}/>
                </ItemDraggable>
            ))}
        </Container>
    );
}