import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

function Notif() {
  const {closeConfirmation, handleDelete} = useContext(StoreContext)

  const handleDeleteItem = () => {
    handleDelete()
  }

  const handleCloses = () => {
    closeConfirmation()
  }

  return (
    <div className='notif bg-slate-800'>
      <p className='text-white'>Are you sure you want to delete this item?</p>
      <div className='flexcommon mt-4'>
        <button onClick={() => handleDeleteItem()} className='bg-blue-500 uppercase px-4 text-white'>yes</button>
        <button onClick={() => handleCloses()} className='bg-red-500 uppercase px-4 text-white'>cancel</button>
      </div>
    </div>
  )
}

export default Notif