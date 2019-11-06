import { useFormik } from 'formik';
import React from 'react';

const initialValues = {
  name: 'Bob',
  age: 15,
  gender: 'male',
  color: 'red'

  // activities: []
};

export const UserForm = () => {
  const {
    handleSubmit,
    dirty,
    touched,
    isValid,
    errors,
    values,
    handleChange,
    handleBlur,
    isSubmitting
  } = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  function onSubmit(values: object) {
    console.log(values);
  }

  function validate(values: any) {
    const errors: any = {};
    if (!values.name) {
      errors.name = 'Name required !';
    }
    if (typeof values.age !== 'number') {
      errors.age = 'Number please !';
    }
    return errors;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>dirty : {JSON.stringify(dirty)}</div>
      <div>touched : {JSON.stringify(touched)}</div>
      <div>isValid : {JSON.stringify(isValid)}</div>
      <div>errors : {JSON.stringify(errors)}</div>
      <div>values : {JSON.stringify(values)}</div>
      <div>isSubmitting : {JSON.stringify(isSubmitting)}</div>
      <hr />
      <label htmlFor="name">Name</label>
      <br />
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      <div>{errors.name && touched.name && errors.name}</div>
      <br />
      <label htmlFor="age">Age</label>
      <br />
      <input
        id="age"
        name="age"
        type="number"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
      />
      <div>{errors.age && touched.age && errors.age}</div>

      <br />
      <label htmlFor="gender">Gender</label>
      <br />
      <select
        id="gender"
        name="gender"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.gender}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <br />
      <label>Color</label>
      <div>
        <label htmlFor="red">Red</label>
        <input
          type="radio"
          id="red"
          name="color"
          onChange={handleChange}
          value="red"
          checked={values.color === 'red'}
        />
        <label htmlFor="green">Green</label>
        <input
          type="radio"
          id="green"
          name="color"
          onChange={handleChange}
          value="green"
          checked={values.color === 'green'}
        />
        <label htmlFor="blue">Blue</label>
        <input
          type="radio"
          id="blue"
          name="color"
          onChange={handleChange}
          value="blue"
          checked={values.color === 'blue'}
        />
      </div>
      <br />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};
