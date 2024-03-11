import './App.css';
import { Table } from './components/Table';
import Modal from './components/Modal';
import { useRef } from 'react';
import { useAddUserMutation, useFetchAllDataQuery } from './services/dataApi';

function App() {
  const modalBtnRef = useRef(null);

  const { data } = useFetchAllDataQuery();
  const [addUser] = useAddUserMutation();

  const onSubmit = (submittedData) => {
    const userExists = data.some((val) => val.id === submittedData.id);
    if (userExists) {
      console.log('update');
    } else {
      addUser(submittedData);
      console.log('update');
    }
  };

  return (
    <>
      <div className="container text-end">
        <button
          className="btn btn-success my-3 float-right"
          onClick={() => modalBtnRef.current.click()}
        >
          + Add user
        </button>
        <Table />
      </div>
      <Modal modalBtnRef={modalBtnRef} onSubmit={onSubmit} btnMessage={'Add'} />
    </>
  );
}

export default App;
