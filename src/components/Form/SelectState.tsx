import { SetStateAction } from "react"
import SelectInput from './SelectInput'
/**
 * Used to standardize the style and usage of the state select menu in all our forms.
 */
export default function StateSelect({value, setFunction}: Props) {

	// List of all the union's states
	const states: Array<string> = 
		['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut',
		'Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam',
		'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
		'Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
		'Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina',
		'North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
		'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
		'Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  	return <SelectInput name="state" options={states} value={value} setFunction={setFunction} />

}
interface Props {
	value: string
  	setFunction: React.Dispatch<SetStateAction<string>>
}