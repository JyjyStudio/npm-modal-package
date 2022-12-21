import React from 'react'
import { render, fireEvent, cleanup, renderHook, screen } from '@testing-library/react'
import Modal from '../index'
import useModal from '../useModal'

describe('Modal Component', () => {
	afterEach(cleanup)
	it('should load the app with modal closed', () => {
		const { result } = renderHook(useModal)
		render(
			<>
			<button onClick={result.current.toggle}>Open Modal</button>
			<Modal visible={result.current.visible} hide={result.current.toggle}>
				Test
			</Modal>
			</>
		)
		expect(screen.queryByTestId('modal-container')).toBeFalsy()
		expect(result.current.visible).toBeFalsy()
	})
	it('should render the text content when modal is open', () => {
		const mockCallback = jest.fn()
		const { container } = render(
			<Modal visible={true} hide={mockCallback}>
				Test
			</Modal>
		)
		expect(screen.getByText(/test/i)).toBeTruthy()
		expect(container).toMatchSnapshot()
	})
	it('should close the modal by clicking on "X" button', () => {
		const { result } = renderHook(useModal)
		const mockCallback = jest.fn()
		const { container } = render(
			<Modal visible={true} hide={mockCallback}>
				Modal Content
			</Modal>
		)
		fireEvent.click(screen.getByText(/x/i))
		expect(mockCallback).toHaveBeenCalledTimes(1)
		expect(result.current.visible).toBeFalsy()
		expect(container).toMatchSnapshot()
	})
})
