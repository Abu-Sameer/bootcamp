import React, { useEffect, useState } from 'react';
import { departmental, faculties, matric, percent } from './Data';

export default function Form() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('details')) || {
      firstName: '',
      lastName: '',
      email: '',
      faculty: '',
      department: '',
      matricNumber: '',
      agree: false,
    }
  );

  let ranges = percent[data.matricNumber];
  ranges = JSON.stringify(localStorage.getItem('range')) || '';

  function handleChange(e) {
    const { value, type, name, checked } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  useEffect(() => {
    localStorage.setItem('details', JSON.stringify(data));
    localStorage.setItem(
      'range',
      JSON.stringify(`${percent[data.matricNumber]}`)
    );
  }, [data, ranges]);

  function onSubmit(e) {
    e.preventDefault();
    setShow(true);
    setData({
      firstName: '',
      lastName: '',
      email: '',
      faculty: '',
      department: '',
      matricNumber: '',
      agree: false,
    });
  }

  let range = percent[data.matricNumber];
  let backgrnd = '';
  let grade = '';
  if (range > 1 && range <= 30) {
    grade = <span style={{ color: 'red' }}>Probation</span>;
    backgrnd = 'red';
  } else if (range > 30 && range <= 45) {
    grade = <span style={{ color: 'skyblue' }}>Pass</span>;
    backgrnd = 'skyblue';
  } else if (range > 45 && range <= 55) {
    grade = <span style={{ color: 'black' }}>Lower class</span>;
    backgrnd = 'black';
  } else if (range > 55 && range <= 70) {
    grade = <span style={{ color: 'blueviolet' }}>Upper</span>;
    backgrnd = 'blueviolet';
  } else if (range > 70 && range <= 85) {
    grade = <span style={{ color: 'darkgreen' }}>First class upper</span>;
    backgrnd = 'darkgreen';
  } else if (range > 85) {
    grade = <span style={{ color: 'navy' }}>Distinction</span>;
    backgrnd = 'navy';
  }

  return (
    <div className="container-fluid py-2 bg-success text-light">
      <h1 className="text-center">Check result</h1>
      <form className="row g-4 needs-validation px-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <div className="input-group">
            <span id="validationCustom01" className="input-group-text">
              First name
            </span>
            <input
              type="text"
              className="form-control"
              aria-describedby="validationCustom01"
              onChange={handleChange}
              name="firstName"
              value={data.firstName}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <span id="validationCustom02" className="input-group-text">
              Last name
            </span>
            <input
              type="text"
              className="form-control"
              aria-describedby="validationCustom02"
              onChange={handleChange}
              name="lastName"
              value={data.lastName}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Email @
            </span>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              value={data.email}
              className="form-control"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a email.</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <span id="validationCustom04" className="input-group-text">
              Faculty
            </span>
            <select
              className="form-select"
              name="faculty"
              onChange={handleChange}
              aria-describedby="validationCustom04"
              required
              defaultValue
            >
              <option className="text-center">--- Choose ---</option>
              {faculties.map((faculty, index) => (
                <option className="text-center" key={index} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">
              Please select a valid faculty.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <span id="validationCustom03" className="input-group-text">
              Department
            </span>
            <select
              className="form-select"
              name="department"
              onChange={handleChange}
              aria-describedby="validationCustom03"
              required
              defaultValue
            >
              <option className="text-center" value="">
                --- Choose ---
              </option>
              {data.faculty &&
                departmental[data.faculty].map((department, index) => (
                  <option
                    className="text-center"
                    key={index}
                    value={department}
                  >
                    {department}
                  </option>
                ))}
            </select>
            <div className="invalid-feedback">
              Please select a valid department.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <span id="validationCustom05" className="input-group-text">
              Matric
            </span>
            <select
              className="form-select"
              name="matricNumber"
              onChange={handleChange}
              aria-describedby="validationCustom05"
              required
              defaultValue
            >
              <option className="text-center" value="">
                --- Choose ---
              </option>
              {data.department &&
                matric[data.department].map((matric, index) => (
                  <option className="text-center" key={index} value={matric}>
                    {matric}
                  </option>
                ))}
            </select>
            <div className="invalid-feedback">
              Please select a valid Matric / App Number.
            </div>
          </div>
        </div>

        <h4>
          Your score is:{' '}
          {percent[data.matricNumber] > '0'
            ? `${percent[data.matricNumber]}`
            : '0'}
        </h4>
        <h5>Your GPA: {percent[data.matricNumber] < 0 ? '' : grade}</h5>
        <div className="container">
          <div className="progress">
            <div
              className="progress-bar "
              style={{
                backgroundColor: backgrnd,
                width: `${
                  percent[data.matricNumber] === undefined
                    ? '0'
                    : percent[data.matricNumber]
                }%`,
                fontWeight: 'bold',
                fontSize: '15px',
                letterSpacing: '1px',
              }}
            >
              {percent[data.matricNumber] === ''
                ? ''
                : `${percent[data.matricNumber]}%`}
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
              You must agree before printing.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-outline-light" type="submit">
            Print result
          </button>
        </div>
      </form>

      <div className="container text-center my-3">
        {show && (
          <>
            {localStorage.getItem('details')}
            <h3>Your Point: {localStorage.getItem('range')}</h3>
          </>
        )}
      </div>
    </div>
  );
}
