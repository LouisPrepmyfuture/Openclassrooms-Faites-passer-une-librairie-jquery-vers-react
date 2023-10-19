import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: "",
	message: "",
	users: []
};

const EmployerSlice = createSlice({
	name: 'addEmployer',
	initialState,
	reducers: {
		addEmployer: (state, action) => {
			state.loading = false;
			if (Array.isArray(action.payload)) {
				action.payload.forEach((user) => {
					state.users.push(user);
				})
			}
			state.status = "success";
			state.message = "Employer Added";
		},
		reStartStatus: (state) => {
			state.status = "";
		},
	},
});
export const { addEmployer, reStartStatus } = EmployerSlice.actions;




export default EmployerSlice.reducer;