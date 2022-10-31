import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../components/Modal'
import Input from '../components/Form/Input'
import StateSelect from '../components/Form/SelectState'
import DatePicker from '../components/Form/DatePicker'
import Dropdown from '../components/Form/Dropdown'


export default function Home(): JSX.Element {

	// local state to store every input value
	const [modal, setModal] = useState(false)
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [street, setStreet] = useState("")
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [zipCode, setZipCode] = useState("")

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		setModal(true)
	}


	return (
		<Container>

			<h1>HRnet</h1>
			<StyledLink to="list">View Current Employees</StyledLink>
			<h2>Create Employee</h2>

			<Form onSubmit={handleSubmit}>

				<Input type='text' name='first-name' value={firstname} setFunction={setFirstname} required/>
				<Input type='text' name='last-name' value={lastname} setFunction={setLastname} required/>
				<DatePicker label='date-of-birth' maxDate={new Date()} required />
				<DatePicker label='start-date' required />
				<Fieldset>
					<legend>Address</legend>
					<Input type='text' name='street' value={street} setFunction={setStreet} required/>
					<Input type='text' name='city' value={city} setFunction={setCity} required/>
					<StateSelect value={state} setFunction={setState}/>
					<Input type='number' name='zip-code' value={zipCode} setFunction={setZipCode} min={0} required/>
				</Fieldset>
				
				<Dropdown />
				
				<SubmitBtn type="submit">Save</SubmitBtn>
				
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
	gap: 0.7rem;
	background: url()
`
const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	border: 2px solid #c0c4d6;
	padding: 1rem;
	margin: 1rem;
	width: 50%;
	@media screen and (max-width: 700px) {
		width: 90%
	}
`
const Fieldset = styled.fieldset`
	margin-top: 10px;
	padding: 5px 10px 10px;
	border: 1px solid #c0c4d6;
`
const SubmitBtn = styled.button`
	margin-top: 1rem;
`
