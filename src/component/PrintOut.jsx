import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStore } from '../features/Slice/ResultSlice';
import user from '../image/5546667.png';

export default function PrintOut() {
  const details = useSelector((store) => store.results);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function emptyStore() {
    dispatch(clearStore());
    navigate('/');
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row p-5">
        {details.map((details) => (
          <div
            key={details.id}
            className="col text-start"
            style={{ width: '450px' }}
          >
            <div className="card text-light bg-success border-3">
              <div className="d-flex align-items-center card-header border-light">
                <img src={user} className="me-3" width="10%" alt={user} />
                <h5>{details.firstName} result details</h5>
              </div>
              <div className="card-body">
                <div>
                  First Name:{' '}
                  <span className="fs-5 fw-bold">{details.firstName}</span>
                </div>
                <div>
                  Middle Name:{' '}
                  <span className="fs-5 fw-bold">{details.middleName}</span>
                </div>
                <div>
                  Last Name:{' '}
                  <span className="fs-5 fw-bold">{details.lastName}</span>
                </div>
                <div>
                  Email: <span className="fs-5 fw-bold">{details.email}</span>
                </div>
                <div>
                  Session:{' '}
                  <span className="fs-5 fw-bold">{details.session}</span>
                </div>
                <div>
                  Faculty:{' '}
                  <span className="fs-5 fw-bold">{details.faculty}</span>
                </div>
                <div>
                  Department:{' '}
                  <span className="fs-5 fw-bold">{details.department}</span>
                </div>
                <div>
                  Matric No:{' '}
                  <span className="fs-5 fw-bold">{details.matricNumber}</span>
                </div>
                <div>
                  Score: <span className="fs-5 fw-bold">{details.scores}</span>
                </div>
              </div>
              <div className="card-footer border-light">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={emptyStore}
                  className="text-start me-5"
                >
                  Back
                </span>
                <span className="fs-5 fw-bold ms-5">
                  {details.agree ? 'Printed' : 'Not printed'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
