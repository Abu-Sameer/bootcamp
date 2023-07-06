import React, { useEffect, useState } from 'react';
import { faculties, departmental, matric, percent } from './Data';
import { useDispatch } from 'react-redux';
import { studentDetails } from '../features/Slice/ResultSlice';
import { useNavigate } from 'react-router-dom';

export default function FormDetails() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [session, setSession] = useState();
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [matricNumber, setMatricNumber] = useState('');
  const [scores, setScores] = useState('');
  const [agree, setAgree] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      studentDetails({
        firstName,
        middleName,
        lastName,
        email,
        session,
        faculty,
        department,
        matricNumber,
        scores,
        agree,
      })
    );
    setFirstName('');
    setLastName('');
    setMiddleName('');
    setEmail('');
    setSession('');
    setFaculty('');
    setDepartment('');
    setMatricNumber('');
    setScores('');
    setAgree(false);
    navigate('/printout');
  }
  useEffect(() => {
    setScores(percent[matricNumber]);
  }, [matricNumber]);

  let backgrnd = '';
  let grade = '';
  if (scores > 1 && scores <= 30) {
    grade = <span style={{ color: 'red' }}>Probation</span>;
    backgrnd = 'red';
  } else if (scores > 30 && scores <= 45) {
    grade = <span style={{ color: 'skyblue' }}>Pass</span>;
    backgrnd = 'skyblue';
  } else if (scores > 45 && scores <= 55) {
    grade = <span style={{ color: 'black' }}>Lower class</span>;
    backgrnd = 'black';
  } else if (scores > 55 && scores <= 70) {
    grade = <span style={{ color: 'blueviolet' }}>Upper</span>;
    backgrnd = 'blueviolet';
  } else if (scores > 70 && scores <= 85) {
    grade = <span style={{ color: 'darkgreen' }}>First class upper</span>;
    backgrnd = 'darkgreen';
  } else if (scores > 85) {
    grade = <span style={{ color: 'navy' }}>Distinction</span>;
    backgrnd = 'navy';
  }

  return (
    <form className="row g-4 needs-validation px-3 py-2" onSubmit={onSubmit}>
      <h4 className="text-center">Enter your details...</h4>
      <div className="col-md-6">
        <label htmlFor="validationCustom01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          aria-describedby="validationCustom01"
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
          value={firstName}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor="inputGroupPrepend">
          Middle Name
        </label>
        <input
          type="text"
          onChange={(e) => setMiddleName(e.target.value)}
          name="session"
          value={middleName}
          className="form-control"
          aria-describedby="inputGroupPrepend"
          required
        />
        <div className="invalid-feedback">Please choose a middle name.</div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          aria-describedby="validationCustom02"
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          value={lastName}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor="inputGroupPrepend2">
          Email
        </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          className="form-control"
          aria-describedby="inputGroupPrepend2"
          required
        />
        <div className="invalid-feedback">Please choose a email.</div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom001" className="form-label">
          Session
        </label>
        <select
          className="form-select"
          name="session"
          onChange={(e) => setSession(e.target.value)}
          aria-describedby="validationCustom001"
          required
          defaultValue
        >
          <option className="text-center">--- Choose ---</option>
          <option className="text-center">First semester</option>
          <option className="text-center">Second semester</option>
        </select>
        <div className="invalid-feedback">Please select a valid session.</div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom04" className="form-label">
          Faculty
        </label>
        <select
          className="form-select"
          name="faculty"
          onChange={(e) => setFaculty(e.target.value)}
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
        <div className="invalid-feedback">Please select a valid faculty.</div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">
          Department
        </label>
        <select
          className="form-select"
          name="department"
          onChange={(e) => setDepartment(e.target.value)}
          aria-describedby="validationCustom03"
          required
          defaultValue
        >
          <option className="text-center" value="">
            --- Choose ---
          </option>
          {faculty &&
            departmental[faculty].map((department, index) => (
              <option className="text-center" key={index} value={department}>
                {department}
              </option>
            ))}
        </select>
        <div className="invalid-feedback">
          Please select a valid department.
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom05" className="form-label">
          Matric
        </label>
        <select
          className="form-select"
          name="matricNumber"
          onChange={(e) => setMatricNumber(e.target.value)}
          aria-describedby="validationCustom05"
          required
          defaultValue
        >
          <option className="text-center" value="">
            --- Choose ---
          </option>
          {department &&
            matric[department].map((matric, index) => (
              <option className="text-center" key={index} value={matric}>
                {matric}
              </option>
            ))}
        </select>
        <div className="invalid-feedback">Please select a valid Matric</div>
      </div>

      <h4>Your score is: {scores}</h4>

      <h5>Your GPA: {scores < 0 ? '' : grade}</h5>

      <div className="container">
        <div className="progress">
          <div
            className="progress-bar fw-bold fs-6"
            style={{
              backgroundColor: backgrnd,
              width: `${scores === undefined ? '0' : scores}%`,
            }}
          >
            {scores === '' ? '' : `${scores}%`}
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) => setAgree(e.target.checked)}
            name="agree"
            checked={agree}
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Do you want to print result
          </label>
          <div className="invalid-feedback">
            You must agree before printing.
          </div>
        </div>
      </div>

      <div className="col-12 text-center">
        {agree && (
          <button className="btn btn-outline-light" type="submit">
            Print result
          </button>
        )}
      </div>
    </form>
  );
}
