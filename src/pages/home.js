import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';

import Nav from '../components/nav';
import Footer from '../components/footer';
import OpenDirectory from '../components/OpenDirectory';
import Dorker from '../components/Dorker';
import '../App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Nav />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          <Tab label="Open Directories" {...a11yProps(0)} />
          <Tab label="Dorker" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className="App" value={value} index={0}>
        <Container maxWidth="sm" className="CenteredContainer">
          <OpenDirectory />
        </Container>
      </TabPanel>
      <TabPanel className="App" value={value} index={1}>
        <Container maxWidth="sm" className="CenteredContainer">
          <Dorker />
        </Container>
      </TabPanel>
      <Footer />
    </div>
  );
}