import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Modal from '../index'

describe('Modal', () => {
	afterEach(cleanup)
	test('open modal', () => {
		const mockCallback = jest.fn()
		const { getByText, container } = render(
			<>
				<button onClick={mockCallback}>open modal</button>
				<Modal visible={false} hide={mockCallback}>
					Employee Created Successfully !
				</Modal>
			</>
		)
		fireEvent.click(getByText(/open modal/i))
		expect(mockCallback).toHaveBeenCalledTimes(1)
		expect(container).toMatchSnapshot()
	})
	test('close modal', () => {
		const mockCallback = jest.fn()
		const { getByText, container } = render(
			<Modal visible={true} hide={mockCallback} />
		)
		fireEvent.click(getByText(/X/i))
		expect(mockCallback).toHaveBeenCalledTimes(1)
		expect(container).toMatchSnapshot()
	})
})
