import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import Loading from "../Util/Loading";

import useStyles from "./styles";

import {FILTER_PRODUCTS, FILTER_STATES, FILTER_CITIES} from '../../actions/index'

const Section = ({sName, sOptions, setStateChecked, stateChecked}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(['all']);
  const [openSelector, setOpenSelector] = useState("");

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    let newChecked = [...checked];

    if (currentIndex === -1) {
      if (value !== 'all') {
        if (newChecked.includes('all')) {
          newChecked.pop();
        }
        newChecked.push(value);
      } else {
        newChecked = ['all'];
      }
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    if (sName === 'products') {
      dispatch({ type: FILTER_PRODUCTS, data: { values: newChecked } });
    } else if (sName === 'state') {
      setStateChecked(newChecked);
      dispatch({ type: FILTER_STATES, data: { values: newChecked } });
    } else {
      dispatch({ type: FILTER_CITIES, data: { values: newChecked, stateChecked: stateChecked } });
    }

    console.log(newChecked);
  };

  return (
    <div style={{ marginBlock: "10px"}}>
      <Button
        variant="contained"
        disableElevation
        fullWidth
        onClick={() => setOpenSelector((p) => (p === sName ? "" : sName))}
        endIcon={
          openSelector === sName ? <IoMdArrowDropup color='#A5A5A5' /> : <IoMdArrowDropdown color='#A5A5A5' />
        }
        className={classes.sButton}
        style={{ boxShadow: openSelector === sName && '0 0 7px 2px #50505080', background: '#232323', }}
      >
        {sName}
      </Button>
      {openSelector === sName && (
        <div>
          <List sx={{ width: '100%', bgcolor: 'rgb(50 45 45 / 72%)', borderRadius: "0 0 4.65px 4.65px" }}>
            {['all', ...sOptions].map((value, index) => {
              const labelId = `checkbox-list-label-${index}`;
              return (
                <ListItem
                  key={index}
                  style={{color: 'rgb(255,255,255)', textTransform: "capitalize"}}
                  disablePadding
                >
                  <ListItemButton onClick={handleToggle(value || value.product_name)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        checked={checked.indexOf(value || value.product_name) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                        style={{color: 'rgb(255,255,255)'}}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value || value.product_name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
      </div>
  )
}

function Filter() {
  const classes = useStyles();
  const { isLoading, cProducts, cities, states } = useSelector(
    (state) => state.products
  );
  const [stateChecked, setStateChecked] = useState(states);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.heading}>
        Filters
      </Typography>
      <hr className={classes.break} />
      <div style={{marginBlock: "45px"}}>
        <Section sName='products' sOptions={cProducts} />
        <Section sName='state' sOptions={states} setStateChecked={setStateChecked} />
        <Section sName='city' sOptions={cities} stateChecked={stateChecked} />
      </div>
    </div>
  );
}

export default Filter;
