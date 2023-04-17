import React, { useState } from 'react';

export default function Form() {
  const [range, setRange] = useState('');
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    faculty: '',
    department: '',
    matricNumber: '',
    agree: false,
  });

  function handleChange(e) {
    const { value, type, name, checked } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handle(e) {
    setRange(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setData({
      firstName: '',
      lastName: '',
      email: '',
      faculty: '',
      department: '',
      matricNumber: '',
      agree: false,
    });
    setRange('');
  }

  let grade = '';
  if (range > 1 && range <= 30) {
    grade = <span className="text-danger">Fail</span>;
  } else if (range > 30 && range <= 45) {
    grade = <span className="text-warning">Pass</span>;
  } else if (range > 45 && range <= 55) {
    grade = <span className="text-secondary">Lower</span>;
  } else if (range > 55 && range <= 70) {
    grade = <span className="text-primary">Upper</span>;
  } else if (range > 70 && range <= 85) {
    grade = <span className="text-success">First class Upper</span>;
  } else if (range > 85) {
    grade = <span style={{ color: 'navy' }}>Distinction</span>;
  }

  return (
    <div className="container mt-4 mb-4">
      <h1>Check result</h1>
      <form className="row g-3 needs-validation" noValidate onSubmit={onSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            onChange={handleChange}
            name="firstName"
            value={data.firstName}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            onChange={handleChange}
            name="lastName"
            value={data.lastName}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomEmail" className="form-label">
            Email address
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              value={data.email}
              className="form-control"
              id="validationCustomEmail"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a email.</div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Faculty
          </label>
          <select
            className="form-select"
            name="faculty"
            onChange={handleChange}
            id="validationCustom04"
            required
            defaultValue
          >
            <option value="">Choose...</option>
            <option value="Eniromental study">Eniromental study</option>
            <option value="Applied science">Applied science</option>
          </select>
          <div className="invalid-feedback">Please select a valid faculty.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            Department
          </label>
          <select
            className="form-select"
            name="department"
            onChange={handleChange}
            id="validationCustom03"
            required
            defaultValue
          >
            <option value="">Choose...</option>
            <option value="Building technology">Building technology</option>
            <option value="Computer science">Computer science</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid department.
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom05" className="form-label">
            Matric / App Number
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="matricNumber"
            value={data.matricNumber}
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid matric / app number.
          </div>
        </div>

        <input
          style={{
            marginTop: '1rem',
            borderRadius: '0.3rem',
            padding: '5px 7px',
            border: '2px solid black',
            fontSize: '19px',
            fontWeight: 'bold',
            width: '4rem',
            textAlign: 'center',
          }}
          type="text"
          placeholder="0%"
          value={range}
          onChange={handle}
        />

        <h4>Your range is: {range > '0%' ? `${range}%` : '0%'}</h4>
        <h5>Your GPA: {range < '' ? '' : grade}</h5>
        <div className="container">
          <div className="progress">
            <div
              className="progress-bar "
              style={{
                width: `${range === '' ? 0 : range}%`,
                fontWeight: 'bold',
                fontSize: '15px',
                letterSpacing: '1px',
              }}
            >
              {range === '' ? '' : `${range}%`}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={handleChange}
              name="agree"
              checked={data.agree}
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              I agree that this is my result
            </label>
            <div className="invalid-feedback">
              You must agree before printting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-outline-success" type="submit">
            Print result
          </button>
        </div>
      </form>
    </div>
  );
}
