import React from 'react'
import { renderHook, screen, render, fireEvent, cleanup } from '@testing-library/react'
import useModal from '../useModal'
import Modal from '..'

describe('useModal hook', () => {

	afterEach(cleanup)

	it('should change the visible state value by clicking on the button', () => {
		const { result } = renderHook(useModal)
		render(
			<>
			<button onClick={() => result.current.toggle()}>Open Modal</button>
			<Modal visible={result.current.visible} hide={() => result.current.toggle()}>Test</Modal>
			</>
		)

		expect(result.current.visible).toBeFalsy()
		fireEvent.click(screen.getByRole("button"))
		expect(result.current.visible).toBeTruthy()
	})
})
