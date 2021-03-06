import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as actions from './../../store/categories/actions';


const AddNewCategory = () => {

  const dispatch = useDispatch();

  const [showInput, setShowInput] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState('');

  const handleChange = (e) => {
    setCategoryTitle(e.target.value);
  }
  const handleSubmit = () => {
    dispatch(actions.addCategory({ title: categoryTitle }));
    setCategoryTitle('');
  }
  
  return (
    <div className="add-new-category">
      {showInput &&
        <InputGroup className="mb-3">
          <FormControl
            value={categoryTitle}
            placeholder="Name"
            onChange={handleChange}
          />
          <InputGroup>
            <Button
              onClick={ handleSubmit }
              variant="outline-secondary"
              disabled={!categoryTitle}
            >
              +
            </Button>
          </InputGroup>
        </InputGroup>
      }
      + <span onClick={() => setShowInput(!showInput)}>
          { showInput ? 'Hide' : 'Add category' }
        </span>
    </div>
  );
}
export default AddNewCategory;