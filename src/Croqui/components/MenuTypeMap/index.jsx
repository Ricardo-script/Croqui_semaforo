import React from 'react';
import default01 from '../img/default01.jpg';


import { Container, TypeObjects, Buttom, Ico } from './styles';

export default function MenuTypeMap(props){

    return(
        <Container>
            <TypeObjects id={props.name} open={props.openTypes}>
                <Buttom onClick={props.optionDefaultMap01}>
                    <Ico id={props.name} src={default01} alt='' />
                </Buttom>
                <Buttom onClick={props.addObjectLeft}>
                    <Ico id={props.name} src={''} alt='' />
                </Buttom>
                <Buttom onClick={props.addObjectRight}>
                    <Ico id={props.name} src={''} alt='' />
                </Buttom>
                <Buttom onClick={props.addObject}>
                    <Ico id={props.name} src={''} alt='' />
                </Buttom>
            </TypeObjects>
        </Container>
    );
}
