import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, Divider, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import Login from './components/Login/Login'
import TestOne from './components/Test1'
import TestTwo from './components/Test2'

import Footer from "./components/Footer/Footer";
import './index.css'

const App = () => {
  const isLoggedIn = false;
  return (
    <Router>
      {isLoggedIn == true &&
        <Box className="sidebar">
          <List className="sidebar-list">
            <Box>

              <ListItem>
                <ListItemIcon>
                  <img className="logo" src="http://ocr.nimbleproperty.net/images/ni-icon.png" />
                </ListItemIcon>
                <ListItemText style={{ whiteSpace: 'nowrap', color: 'black' }} >
                  <b>Daily Sales</b>
                </ListItemText>
              </ListItem>

              <Divider />

              <Link to="/testone">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText style={{ whiteSpace: 'nowrap', color: 'black' }}  >Inbox</ListItemText>
                </ListItem>
              </Link>

              <Link to="/testtwo">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText style={{ whiteSpace: 'nowrap', color: 'black' }}  >Mail</ListItemText>
                </ListItem>
              </Link>
              <Divider />
            </Box>

            <Box>

              <Link to="/testone">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText style={{ whiteSpace: 'nowrap', color: 'black' }}  >Mail</ListItemText>
                </ListItem>
              </Link>

              <Link to="/testtwo">
                <ListItem>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText style={{ whiteSpace: 'nowrap', color: 'black' }}  >Mail</ListItemText>
                </ListItem>
              </Link>

            </Box>

          </List>

        </Box>
      }

      <Box className="content">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/testone" element={<TestOne />} />
          <Route path="/testtwo" element={<TestTwo />} />
          <Route path="*" element={<h1>Un Auth</h1>} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;