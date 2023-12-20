import { Button, IconButton, Select, Option } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export function CircularPagination({ pagination, data, sizesInPage }) {
  const getItemProps = (index, current_page) => ({
    key: index,
    variant: current_page === index ? "filled" : "text",
    color: "gray",
    onClick: () => pagination.fns.onSetPage(index),
    className: "rounded-full",
  });

  return (
    <div className="flex items-center gap-4">
      <div className="w-25">
        <Select value={sizesInPage[0].toString()} onChange={(e) => pagination.fns.onSetSize(e)}>
          {sizesInPage.map((item) => (
            <Option key={item} value={item.toString()}>
              {item}
            </Option>
          ))}
        </Select>
      </div>

      {/* btn Previous  condition nombre de page*/}
     {pagination.state.page > 0 && (
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        Previous
      </Button>
      )}
      {/* Loop Btn Page courente */}
      <div className="flex items-center gap-2">
        {pagination.state.getPages(data.nodes).map((_, index) => (
          <IconButton
            key={index}
            {...getItemProps(index, pagination.state.page)}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>

      {/* btn Next  condition nombre de page */ }
      {pagination.state.page < pagination.state.getTotalPages(data.nodes) - 1 && (
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
       )}
    </div>
  );
}

CircularPagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  sizesInPage: PropTypes.array.isRequired,
};
