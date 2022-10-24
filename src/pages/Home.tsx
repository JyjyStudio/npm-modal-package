import styled from 'styled-components'
import { addEmployee } from '../features/employees/employeesSlice'
import { useTsDispatch } from '../utils/redux/hooks'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../components/Modal'

export default function Home(): JSX.Element {
	
	const [modal, setModal] = useState(false)

	const dispatch = useTsDispatch()

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		dispatch(addEmployee())
		setModal(true)
	}

	return (
		<Container>
			<h1>HRnet</h1>
			<Link to="list">View Current Employees</Link>
			<h2>Create Employee</h2>
			<Form action="#" id="create-employee" onSubmit={handleSubmit}>
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name" />

				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name" />

				<label htmlFor="date-of-birth">Date of Birth</label>
				<input id="date-of-birth" type="text" />

				<label htmlFor="start-date">Start Date</label>
				<input id="start-date" type="text" />

				<fieldset className="address">
					<legend>Address</legend>

					<label htmlFor="street">Street</label>
					<input id="street" type="text" />

					<label htmlFor="city">City</label>
					<input id="city" type="text" />

					<label htmlFor="state">State</label>
					<select name="state" id="state"></select>

					<label htmlFor="zip-code">Zip Code</label>
					<input id="zip-code" type="number" />
				</fieldset>

				<label htmlFor="department">Department</label>
				<select name="department" id="department">
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>
				<button type="submit">Save</button>
			</Form>

			{modal && <Modal setModal={setModal}>Employee Created Successfully !</Modal>}
		</Container>
	)
}

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
`
