import React from 'react';
import { useDispatch } from "react-redux";
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { setStatusFilter } from "../../store/statusFilter/actions";
import { statusFilters } from '../../store/statusFilter/reducer';


const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleChange = val => {
    dispatch(setStatusFilter(val))
  }

  return (
    <div className='text-right'>
      <ToggleButtonGroup
        onChange={handleChange}
        defaultValue={ statusFilters.SHOW_ALL }
        type="radio"
        name="filters"
        size="sm"
      >
        <ToggleButton
          value={ statusFilters.SHOW_ALL }
          variant="light"
        >
          All
        </ToggleButton>
        <ToggleButton
          value={ statusFilters.SHOW_ACTIVE }
          variant="light"
        >
          Active
        </ToggleButton>
        <ToggleButton
          value={ statusFilters.SHOW_COMPLETED }
          variant="light"
        >
          Done
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default StatusFilter;