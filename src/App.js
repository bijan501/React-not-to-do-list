import logo from './logo.svg';
import './App.css';

function App() {

  const handleOnSubmit = (e) => {};
  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title --> */}
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        {/* <!-- form area --> */}
        <form action="javascript:void(0)" onSubmit={handleOnSubmit}>
          <div className="row mt-3 g-2">
            <div className="col-md-6">
              <input
                name="task"
                type="text"
                className="form-control"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-3">
              <input
                name="hr"
                type="number"
                className="form-control"
                min="1"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-3 d-grid gap-2">
              <button className="btn btn-primary">
                <i className="fa-solid fa-plus"></i>
                Add New Task
              </button>
            </div>
          </div>
        </form>

        {/* <!-- list area --> */}
        <div className="row mt-5 g-2">
          <div className="col-md">
            <h2 className="text-center">Entry List</h2>
            <hr />
            <table className="table table-striped table-hover">
              <tbody id="task-list"></tbody>
            </table>
          </div>
          <div className="col-md">
            <h2 className="text-center">Bad List</h2>
            <hr />
            <table className="table table-striped table-hover">
              <tbody id="bad-task"></tbody>
            </table>
            <div className="text-end fw-bold">
              You could have saved = <span id="totalBadHr">0</span> Hrs
            </div>
          </div>
        </div>

        {/* <!-- total hr area --> */}
        <div className="row fw-bold">
          <div className="col">
            The total hours allocated = <span id="totalHrs">0</span> Hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
