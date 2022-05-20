import React  from 'react';
import closeModal from '../../img/closeModal.png';
import { Container, Header, Close, Content, AreaButtons, Buttom} from './styles';

export default function ModalConfirm(props) {

    return (
        <Container open={props.openModal}>
            <Header>
                <span>Informação</span> 
                <Close onClick={() => props.setOpenModal(false)}><img src={closeModal} alt="" /></Close>
            </Header>
            <Content>
                <span>Deseja realmente apagar todos os objetos inseridos no croqui?</span>
                <AreaButtons>
                    <Buttom>Sim</Buttom>
                    <Buttom onClick={() => props.setOpenModal(false)}>Não</Buttom>
                </AreaButtons>
            </Content>
        </Container>
    );
}
