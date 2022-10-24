import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//creation d'une partie de notre store (slice). Contient le nom du slice, son state initial et les reducers+
const initialState:AddEmployee = {
	name: null
}

export const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action: PayloadAction<AddEmployee>) => {
			state.name = 'toto'
			// console.log('employee successfully added');
		},
	},
})

// actions creator
export const { addEmployee } = employeesSlice.actions

interface AddEmployee {
	name: null | string
}
