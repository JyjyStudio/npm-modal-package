import React from 'react'
import styled from 'styled-components'

/**
 * 
 * a simple modal component.
 */
export const Modal:React.FC<Props> = ({ children, setModal, overlay_color="rgba(49,49,49,0.8)", modal_color="white", text_color="black" }: Props): JSX.Element => {
	return (
		<div className='modal'>
			<Overlay onClick={() => setModal(false)} overlay_color={overlay_color}/>
			<Content modal_color={modal_color}>
				<CloseIcon onClick={() => setModal(false)}>X</CloseIcon>
				<p style={{color: text_color}}>{children}</p>
			</Content>
		</div>
	)
}

export default Modal
export interface Props {
	children: string
	setModal: React.Dispatch<React.SetStateAction<boolean>>
	overlay_color?: string
	modal_color?: string
	text_color?: string
}

interface Overlay {
	overlay_color?: string
}
interface Content {
	modal_color?: string
}

const Overlay = styled.div<Overlay>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: ${(props) => props.overlay_color};
`
const Content = styled.div<Content>`
	position: absolute;
	width: 50%;
	background-color: ${({modal_color}) => modal_color};
	border-radius: 5px;
	text-align: center;
	padding: 2rem 0;
	top: 40%;
	left: 50%;
    transform: translateX(-50%);
	@media screen and (max-width: 500px) {
	    width: 60%;
    	padding: 4rem 1rem;
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
