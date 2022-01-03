import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import './Navbar.css';
import CountrySelect from './CountrySelector';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
  },
  text: {
    secondary: '#fff',
  },
});

const HeaderPage = (props) => {
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const { page, changeHandler } = props;

  return (
    <header className="header">

      {page === 'home' && (
      <Grid container spacing={0} columns={12}>
        <Grid item xs={3}>
          <p className="date">{today}</p>
        </Grid>
        <Grid item xs={4} className="title">
          <p> Covid Worldwide Vaccination</p>
        </Grid>
        <Grid item xs={5}>
          <CountrySelect changeHandler={changeHandler} />
        </Grid>
      </Grid>
      )}

      {page !== 'home' && (
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} columns={12}>
          <Grid item xs={1}>
            <ArrowBackIosIcon style={{ margin: '30% 0 0 15%' }} />
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            <p>
              {page}
              /Covid State
            </p>
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="date"
              label="Date"
              type="date"
              style={{ width: '180px' }}
              defaultValue={today}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

        </Grid>
      </ThemeProvider>
      )}
    </header>

  );
};

HeaderPage.propTypes = {
  page: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default HeaderPage;
