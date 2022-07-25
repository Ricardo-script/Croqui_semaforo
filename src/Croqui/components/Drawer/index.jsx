import React from 'react';
import { AreaDrawer, Header, Title, AreaBox, Group, Box, HeaderBox, Estagio, TitleBox, AreaImg, AreaButtons, ButtonAdd } from './styles';
import estagio from '../img/estagios/01.png';

export default function Drawer(props){
	return(
		<AreaDrawer open={props.open}>
			<Header>
				<Title>Diagramação de Estados</Title>
			</Header>
			<AreaButtons>
				<ButtonAdd className="icon-btn add-btn">
					<div className="add-icon"></div>
					<div className="btn-txt">Novo Estágio</div>
				</ButtonAdd>
				<ButtonAdd className="icon-btn add-btn">
					<div className="btn-txt">Remover</div>
				</ButtonAdd>
			</AreaButtons>
			<AreaBox>
				<Group>
					<Box active={true}>
						<HeaderBox>
							<Estagio>A</Estagio>
							<TitleBox>Anel 1</TitleBox>
						</HeaderBox>
						<AreaImg>
							<img src={estagio} alt="" />
						</AreaImg>
					</Box>
					<Box>
						<HeaderBox>
							<Estagio>B</Estagio>
							<TitleBox>Anel 2</TitleBox>
						</HeaderBox>
						<AreaImg>
							<img src={estagio} alt="" />
						</AreaImg>
					</Box>
					<Box>
						<HeaderBox>
							<Estagio>C</Estagio>
							<TitleBox>Anel 3</TitleBox>
						</HeaderBox>
						<AreaImg>
							<img src={estagio} alt="" />
						</AreaImg>
					</Box>
					<Box>
						<HeaderBox>
							<Estagio>D</Estagio>
							<TitleBox>Anel 4</TitleBox>
						</HeaderBox>
						<AreaImg>
							<img src={estagio} alt="" />
						</AreaImg>
					</Box>
					<Box>
						<HeaderBox>
							<Estagio>E</Estagio>
							<TitleBox>Anel 5</TitleBox>
						</HeaderBox>
						<AreaImg>
							<img src={estagio} alt="" />
						</AreaImg>
					</Box>
				</Group>
			</AreaBox>
		</AreaDrawer>
	);
}
