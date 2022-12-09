import React from 'react'
import styled from 'styled-components'


export default function Modal ({ children, setModal, overlayColor="rgba(49,49,49,0.8)", modalColor="#fff", textColor="#000" }: Props): JSX.Element {
	return (
		<div className='modal'>
			<Overlay onClick={() => setModal(false)} overlayColor={overlayColor}/>
			<Content modalColor={modalColor}>
				<CloseIcon onClick={() => setModal(false)}>X</CloseIcon>
				<p style={{color: textColor}}>{children}</p>
			</Content>
		</div>
	)
}
export interface Props {
	children: string
	setModal: React.Dispatch<React.SetStateAction<boolean>>
	overlayColor?: string
	modalColor?: string
	textColor?: string
}

interface Overlay {
	overlayColor?: string
}
interface Content {
	modalColor?: string
}

const Overlay = styled.div<Overlay>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: ${(props) => props.overlayColor};
`
const Content = styled.div<Content>`
	position: absolute;
	width: 50%;
	background-color: ${({modalColor}) => modalColor};
	border-radius: 5px;
	text-align: center;
	padding: 2rem 0;
	top: 40%;
	left: 50%;
    transform: translateX(-50%);
	@media screen and (max-width: 500px) {
	    width: 60%;
    	padding: 4rem 1rem;
    	top: 60%;
	    font-size: 1.2rem;
	}
`
const CloseIcon = styled.span`
	position: absolute;
	top: -10px;
	right: -10px;
	cursor: pointer;
	border-radius: 50%;
	background: black;
	color: white;
	padding: 5px 10px;
`
