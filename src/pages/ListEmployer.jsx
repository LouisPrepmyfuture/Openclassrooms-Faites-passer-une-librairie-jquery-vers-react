
import * as React from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { useSelector } from 'react-redux';
import { useTheme } from "@table-library/react-table-library/theme";
import {
  useSort,
  HeaderCellSort,
  SortIconPositions,
  SortToggleType,
} from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";


const ListEmployer = () => {
	const users = useSelector((state) => state.enployers.users);
	// theme
	const theme = useTheme({
		HeaderRow: `
				background-color: #ebeafd;
			`,
		BaseCell: `
		&:not(:last-of-type) {
			border-right: 1px solid #a0a8ae;
		}

		padding: 8px 16px;
	`,
		Row: `
				&:nth-of-type(odd) {
					background-color: #d2e9fb;
				}
				.td {
					border-top: 1px solid #a0a8ae;
					border-bottom: 1px solid #a0a8ae;
				}
				&:nth-of-type(even) {
					background-color: #eaf5fd;
				}
			`,
	});



	// Search
	const [search, setSearch] = React.useState("");
	const handleSearch = (event) => {
    setSearch(event.target.value);
  };
	const data = {
    nodes: users.filter((item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase())
    ),
  };
// Sort
	const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        FIRSTNAME: (array) => array.sort((a, b) => {
					console.log(a);
					a.firstName.localeCompare(b.firstName)
				}),
					LASTNAME: (array) => array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
					STARTDATA: (array) => array.sort((a, b) => a.startDate.localeCompare(b.startDate)),
					DEPARTEMENT: (array) => array.sort((a, b) => a.departement.localeCompare(b.departement)),
					DATABIRTH: (array) => array.sort((a, b) => a.dateBirth.localeCompare(b.dateBirth)),
					STREET: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
					CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
					STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
					ZIPCODE: (array) => array.sort((a, b) => a.zipCode.localeCompare(b.zipCode))
			},
		}
  );
	function onSortChange(action, state) {
    console.log(action, state);
  }

	// pagination
	
  return (
		<>
		<label htmlFor="search">
			Search by Task:&nbsp;
			<input id="search" type="text" value={search} onChange={handleSearch} />
		</label>
		<br />
		<Table data={data} theme={theme} sort={sort}> 
			{(tableList) => (
      <>
					<Header>
					<HeaderRow>
					<HeaderCellSort sortKey="FIRSTNAME">first name</HeaderCellSort>
					<HeaderCellSort sortKey="LASTNAME">last name</HeaderCellSort>
					<HeaderCellSort sortKey="STARTDATA">start date</HeaderCellSort>
					<HeaderCellSort sortKey="DEPARTEMENT">departement</HeaderCellSort>
					<HeaderCellSort sortKey="DATABIRTH">date of birth</HeaderCellSort>
					<HeaderCellSort sortKey="STREET">street</HeaderCellSort>
					<HeaderCellSort sortKey="CITY">city</HeaderCellSort>
					<HeaderCellSort sortKey="STATE">state</HeaderCellSort>
					<HeaderCellSort sortKey="ZIPCODE">zip code</HeaderCellSort>
					</HeaderRow>
					</Header>
					<Body>
						{tableList.map((item,index) => (
								<Row key={index} item={item}>
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
		</>
	)
}

export default ListEmployer;