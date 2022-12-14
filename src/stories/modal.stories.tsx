import React from 'react'
import { useArgs } from '@storybook/client-api'
import { ComponentMeta } from '@storybook/react'
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

export const Getting_Started = (args: ComponentMeta<typeof Modal>) => {
	const [{ isOpen }, updateArgs] = useArgs()
	return (
		<>
			<h1>Modal Tester</h1>
			<button onClick={() => updateArgs({ isOpen: !isOpen })}>
				Click me !
			</button>
			{!!isOpen && (
				<Modal
					{...args}
					setModal={() => updateArgs({ isOpen: !isOpen })}
				>
					Modal successfully created !
				</Modal>
			)}
		</>
	)
}
