import { useRef } from 'react';
// import { useState } from 'react';
import {
  useDeleteContactMutation,
  useFetchAllDataQuery,
} from '../services/dataApi';
import Modal from './Modal';

export const Table = () => {
  const { data, isSuccess } = useFetchAllDataQuery();
  const [deleteContact] = useDeleteContactMutation();

  // const [show, setShow] = useState(false);

  const btnRef = useRef(null);

  const handleUpdate = () => {
    // setShow(true);
    btnRef.current.click();
  };

  return (
    <>
      <table className="table table-primary">
        <thead className="my-5 mx-5">
          <tr className="my-5 mx-5">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">User Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess &&
            data.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.username}</td>
                  <td>{val.phone}</td>
                  <td>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteContact(val.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Modal modalBtnRef={btnRef} btnMessage={'Update'} />
    </>
  );
};
