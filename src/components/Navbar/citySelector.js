import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

export default function Filter(props) {
  const { cities } = props;
  return (
    <Autocomplete
      id="filter-demo"
      options={cities}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 175 }}
      renderInput={(params) => <TextField {...params} label="City/Town" />}
    />
  );
}

Filter.propTypes = {
  cities: PropTypes.array.isRequired,
};