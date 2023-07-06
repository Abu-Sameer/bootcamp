import FormDetails from './FormDetails';
import logo from '../image/logo.jpg';

export default function OnlineResult() {
  return (
    <div
      className="container py-2 bg-success text-light my-2 rounded"
      style={{ width: '600px' }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <img src={logo} className="rounded-pill" width="15%" alt={logo} />
        <h2 className="text-center mt-2">Student semester result</h2>
      </div>
      <FormDetails />
    </div>
  );
}
