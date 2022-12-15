import React from 'react'
import { useArgs } from '@storybook/client-api'
import { ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Modal from '../index'

export default {
	title: 'LIBRARY/Modal',
	component: Modal,
	argTypes: {
		setModal: {
			description:
				'create a state for the component and pass it the setModal prop',
			table: {
				defaultValue: { summary: 'setModal={setIsOpen}' },
				disable: true
			},
		},
		isOpen: {
			description: 'modal visibility state',
			table: {
				defaultValue: { summary: false },
				type: {
					summary: 'boolean',
					detail: 'const [isOpen, setIsOpen] = useState(false); ',
				},
			},
		},
	},
	args: {
		isOpen: false,
	},
} as ComponentMeta<typeof Modal>

export const Default = (args: ComponentMeta<typeof Modal>) => {
	const [{ isOpen }, updateArgs] = useArgs()
	const handleClick = () => updateArgs({ isOpen: !isOpen })
	return (
		<>
			<h1>Modal Tester</h1>
			<button onClick={handleClick}>Click me !</button>
			{!!isOpen && (
				<Modal
					{...args}
					setModal={handleClick}
				>Modal successfully created !</Modal>
			)}
		</>
	)
}

import {within, fireEvent} from "@storybook/testing-library"
import { expect } from '@storybook/jest'

Default.play = async ({canvasElement}) => {

	const canvas = within(canvasElement)

	await expect(canvas.getByText('Modal Tester')).toBeInTheDocument();

	await canvas.getByText('Click me !')

	await fireEvent.click(canvas.getByRole('button'))

	await expect(canvas.getByText('Modal successfully created !')).toBeInTheDocument();

}