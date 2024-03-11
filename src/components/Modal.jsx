/* eslint-disable react/prop-types */

import { useRef, useState } from 'react';
const Modal = ({ modalBtnRef = null, btnMessage, onSubmit }) => {
  const formRef = useRef(null);
  const [data, setData] = useState({
    id: Math.floor(100000 + Math.random() * 900000).toString(),
    name: '',
    email: '',
    username: '',
    phone: '',
  });

  const handleSubmit = () => {
    onSubmit(data);

    formRef.current.reset();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={modalBtnRef}
        style={{ display: 'none' }}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {btnMessage} User
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form ref={formRef} className="mx-5 my-5">
              <div className="mb-3">
                <input
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="User Name"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Phone Number"
                />
              </div>
            </form>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {btnMessage || 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
