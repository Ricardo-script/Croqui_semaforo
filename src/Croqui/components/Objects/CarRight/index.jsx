import React, { useState } from 'react';
import ItemDraggable from '../../ItemDraggable';
import direita from '../../img/direita.png';
import { Container, MoveRight } from './styles';

export default function CarRight(){

    const [moveRight, setMoveRight] = useState(true);
    const [carRight, setCarRight] = useState([{ top: 46, left: 35},{ top: 44, left: 16},{ top: 38, left: 8}]);
    

    return(
        <Container>
            {carRight.map((item,index) => (
                <ItemDraggable key={index} index={index} object='carRight' top={item.top} left={item.left} setCarRight={setCarRight} carRight={carRight}>
                    <MoveRight src={direita} alt="" move={moveRight} onClick={() => setMoveRight(true)}/>
                </ItemDraggable>
            ))}
        </Container>
    );
}