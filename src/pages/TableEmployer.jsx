import * as React from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTheme } from "@table-library/react-table-library/theme";
import { useSelector } from "react-redux";
import { Input } from "@material-tailwind/react";
import { CircularPagination } from "../compenants/Pagination";
import { Link } from "react-router-dom";

const TableEmployer = () => {
	const theme = useTheme(getTheme());
  const users = useSelector((state) => state.enployers.users);
  const [search, setSearch] = React.useState("");

	// data(emplyer) + filter input search (firstName + lastName)
  const data = {
    nodes: users.filter((item) => {
      if (item.firstName.toLowerCase().includes(search.toLowerCase())) {
        return item;
      } else if (item.lastName.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    }),
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

	// const trie tableau employer par colone
  const sort = useSort(
    data,
    {},
    {
      sortFns: {
        FIRSTNAME: (array) =>
          array.sort((a, b) => {
            a.firstName.localeCompare(b.firstName);
          }),
        LASTNAME: (array) =>
          array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
        STARTDATA: (array) =>
          array.sort((a, b) => a.startDate.localeCompare(b.startDate)),
        DEPARTEMENT: (array) =>
          array.sort((a, b) => a.departement.localeCompare(b.departement)),
        DATABIRTH: (array) =>
          array.sort((a, b) => a.dateBirth.localeCompare(b.dateBirth)),
        STREET: (array) =>
          array.sort((a, b) => a.street.localeCompare(b.street)),
        CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
        STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
        ZIPCODE: (array) =>
          array.sort((a, b) => a.zipCode.localeCompare(b.zipCode)),
      },
    }
  );

	// params pagination
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 5,
    },
  });

  const sizesInPage = [5, 10, 20];


  return (
    <section className="my-8  p-5 bg-white">
      <Link className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        to={"/"}>
        Add Employee
      </Link>
      <div className=" place-content-end">
        <div className="w-6/12 mt-5">
          <label htmlFor="search">
            <Input
              label="Input Blue"
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>
      <Table
        data={data}
        className="p-6"
        pagination={pagination}
        theme={theme}
        sort={sort}
      >
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort sortKey="FIRSTNAME">first name</HeaderCellSort>
                <HeaderCellSort sortKey="LASTNAME">last name</HeaderCellSort>
                <HeaderCellSort sortKey="STARTDATA">start date</HeaderCellSort>
                <HeaderCellSort sortKey="DEPARTEMENT">
                  departement
                </HeaderCellSort>
                <HeaderCellSort sortKey="DATABIRTH">
                  date of birth
                </HeaderCellSort>
                <HeaderCellSort sortKey="STREET">street</HeaderCellSort>
                <HeaderCellSort sortKey="CITY">city</HeaderCellSort>
                <HeaderCellSort sortKey="STATE">state</HeaderCellSort>
                <HeaderCellSort sortKey="ZIPCODE">zip code</HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.firstName}</Cell>
                  <Cell>{item.lastName}</Cell>
                  <Cell>{item.startDate}</Cell>
                  <Cell>{item.departement}</Cell>
                  <Cell>{item.dateBirth}</Cell>
                  <Cell>{item.street}</Cell>
                  <Cell>{item.city}</Cell>
                  <Cell>{item.state}</Cell>
                  <Cell>{item.zipCode}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      <CircularPagination
        pagination={pagination}
        data={data}
        sizesInPage={sizesInPage}
      />
    </section>
  );
};

export default TableEmployer;
