import { useEffect, useState, useContext } from "react";
import {
	Card,
  Input,
  Select,
  Typography,
  Button,
  Option,
} from "@material-tailwind/react";
import { addEmployer, reStartStatus } from "../redux-employer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { mockeEmployer } from "../mocke_employer";

import {ModalContext} from "modal-js-react"

import ContentModal from "../compenants/ContenModal";


function FormCreateEmployer() {
	//state form
	const [firstName, setFirstName] = useState("first-name");
  const [lastName, setLastName] = useState("laste-name");
  const [dateBirth, setDataBirth] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [street, setStreet] = useState("laste-name");
  const [city, setCity] = useState("laste-name");
  const [state, setState] = useState("laste-name");
  const [zipCode, setZipCode] = useState("laste-name");
  const [departement, setDepartement] = useState("laste-name");
  const navigate = useNavigate();

	//redux
	const dispatch = useDispatch();
  const status = useSelector((state) => state.enployers.status);

  const saveEmployee = () => {
		const user = {
			firstName,
      lastName,
      dateBirth,
      dateStart,
      street,
      city,
      state,
      zipCode,
      departement,
    };
    dispatch(addEmployer(user));
  };

  // Mock data
	addEmployer(mockeEmployer)

	// Context Modal
  let { handleModal } = useContext(ModalContext);

  useEffect(() => {
    if (status === "success") {
      dispatch(reStartStatus());
      handleModal(<ContentModal ></ContentModal>, "title")
    }
  }, [status, navigate, dispatch, handleModal]);


  return (
    <Card className=" bg-white p-5 mt-6 w-96" shadow={true}>
      <Typography variant="h1" color="blue-gray">
        HRnet
      </Typography>
			<Link className="mt-5 middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			 to={"/employer"}>
			 Tableau employer
      </Link>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80 place-content-center">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            size="lg"
            label="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            size="lg"
            type="date"
            label="Date of Birth"
            onChange={(e) => setDataBirth(e.target.value)}
          />
          <Input
            size="lg"
            type="date"
            label="Start Date"
            onChange={(e) => setDateStart(e.target.value)}
          />
        </div>
        <fieldset className="address">
          <Typography variant="lead" color="blue-gray">
            Address
          </Typography>
          <div className="mb-4 flex flex-col gap-4">
            <Input
              size="lg"
              label="Street"
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              size="lg"
              label="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              size="lg"
              label="State"
              onChange={(e) => setState(e.target.value)}
            />
            <Input
              size="lg"
              type="number"
              label="Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </fieldset>
        <Select
          label="Department"
          onChange={(e) => {
            if (e && e.target) {
              setDepartement(e.target.value);
            }
          }}
        >
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

export default FormCreateEmployer;
