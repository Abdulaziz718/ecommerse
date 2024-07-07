import React from 'react'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 10000 }}
      />
    </div>
  )
}

export default App