import React from 'react'
import { useArgs } from '@storybook/client-api'
import { ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Modal from '../index'

export default {
	title: 'LIBRARY/Modal',
	component: Modal,
	argTypes: {
		hide: {
			description: 'modal visibility setter function',
			table: {
				defaultValue: { summary: 'toggle' },
				type: {
					summary: 'function',
					detail: 'const {visible, toggle} = useModal()',
				},
				disable: true,
			},
		},
		visible: {
			description: 'modal visibility state value',
			table: {
				defaultValue: { summary: false },
				type: {
					summary: 'boolean',
					detail: 'const {visible, toggle} = useModal()',
				},
			},
		},
	},
	args: {
		visible: false,
	},
} as ComponentMeta<typeof Modal>

export const Default = ({ ...args }: IProps) => {
	const [{ visible }, updateArgs] = useArgs()
	const handleClick = () => updateArgs({ visible: !visible })

	return (
		<>
			<h1>Modal Tester</h1>
			<button onClick={handleClick}>Click me !</button>
			<Modal visible={visible} hide={handleClick}>
				Modal successfully created !
			</Modal>
		</>
	)
}

interface IProps {
	visible: boolean
	toggle: Function
	args: ComponentMeta<typeof Modal>
}
