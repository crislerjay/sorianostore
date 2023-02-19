import React, { useContext, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { StoreContext } from '../Context/StoreContext';

function AddItemModal() {
  const {toggleModal, handleAddItem} = useContext(StoreContext)
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [each, setEach] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddItem(item, price, each)
    alert('item created!')
    resetFields()
  }

  const resetFields = () => {
    setItem('')
    setPrice('')
    setEach('')
  }

  return (
    <div className='modal'>
      <button className='bg-stone-50 float-right' onClick={() => toggleModal()}><AiOutlineClose size={25}/></button>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='heading02'>Add Item</h2>
        <div>
          <input className='input' type='text' placeholder='item' value={item} onChange={(e) => setItem(e.target.value)} required/>
        </div>
        <div>
          <input className='input' type='number' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} required/>
        </div>
        <div>
          <input className='input' type='number' value={each} placeholder='price per piece: optional' onChange={(e) => setEach(e.target.value)}/>
        </div>
        <button className='w-full p-2 bg-sky-500 font-bold rounded-md text-white' type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default AddItemModal