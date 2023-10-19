import { useEffect, useState } from "react";
import {Card,Input,Select,Typography,Button ,Option} from "@material-tailwind/react";
import { addEmployer, reStartStatus } from "../redux-employer";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { mockeEmployer } from "../mocke_employer";

function FormCreateEmployer() {
			const dispatch = useDispatch();
			const [firstName, setFirstName] = useState('first-name');
			const [lastName, setLastName] = useState('laste-name');
			const [dateBirth, setDataBirth] = useState('');
			const [dateStart, setDateStart] = useState('');
			const [street, setStreet] = useState('laste-name');
			const [city, setCity] = useState('laste-name');
			const [state, setState] = useState('laste-name');
			const [zipCode, setZipCode] = useState('laste-name');
			const [departement, setDepartement] = useState('laste-name');
			const navigate = useNavigate()
			
			
			const status = useSelector((state) => state.enployers.status);
			const users = useSelector((state) => state.enployers.users);
			console.log(users);

			const saveEmployee = () =>{
				// const [firstName, setFirstName] = useState('first-name');
				const user = {firstName, lastName, dateBirth, dateStart, street, city,state,zipCode,departement}
				dispatch(addEmployer(user))
			}

			const addMockEmployer = () =>{
					dispatch(addEmployer(mockeEmployer))
			}
		
			useEffect(()=>{
				if(status === "success"){
					dispatch(reStartStatus())
					navigate('employer/')
				}
			},[status, navigate,dispatch])

			return (
					<Card className="p-5 mt-6 w-96" shadow={true}>
						<Card>
							<Button className="mt-6" onClick={addMockEmployer}>
								add employer
							</Button>
						</Card>
						<Typography variant="h1" color="blue-gray">
							HRnet
						</Typography>
						<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80 place-content-center">
							<div className="mb-4 flex flex-col gap-6">
								<Input size="lg" label="first name" onChange={(e) => setFirstName(e.target.value)} />
								<Input size="lg" label="last name" onChange={(e) => setLastName(e.target.value)} />
								<Input size="lg" type="date" label="Date of Birth" onChange={(e) => setDataBirth(e.target.value)} />
								<Input size="lg" type="date" label="Start Date" onChange={(e) => setDateStart(e.target.value)} />
							</div>
							<fieldset className="address">
								<Typography variant="lead" color="blue-gray">
									Address
								</Typography>
								<div className="mb-4 flex flex-col gap-4">
									<Input size="lg" label="Street" onChange={(e) => setStreet(e.target.value)} />
									<Input size="lg" label="City" onChange={(e) => setCity(e.target.value)} />
									<Input size="lg" label="State" onChange={(e) => setState(e.target.value)} />
									<Input size="lg" type="number" label="Zip Code"onChange={(e) => setZipCode(e.target.value)} />
								</div>
							</fieldset>
							<Select label="Department" onChange={(e) => setDepartement(e.target.value)}>
								<Option>Sales</Option>
								<Option>Marketing</Option>
								<Option>Engineering</Option>
								<Option>Human Resources</Option>
								<Option>Legal</Option>
							</Select>
							<Button className="mt-6" onClick={saveEmployee}>
								Save
							</Button>
						</form>
					</Card>
			);
		}
	
export default FormCreateEmployer