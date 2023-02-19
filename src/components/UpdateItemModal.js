import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { StoreContext } from '../Context/StoreContext';

function UpdateItemModal() {

  const {toggleEditModal, editData, handleEdit} = useContext(StoreContext)
  const [id, setId] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [each, setEach] = useState('');

  useEffect(() => {
    setId(editData.id)
    setItem(editData.item)
    setPrice(editData.price)
    setEach(editData.each)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (each === undefined) {
      const updatedItem = {id: id, item: item, price, price}
      handleEdit(updatedItem)
    } else {
      const updatedItem = {id: id, item: item, price, price, each: each}
      handleEdit(updatedItem)
    }
  }

  return (
    <div className='modal'>
      <button className='bg-stone-50 float-right' onClick={() => toggleEditModal()}><AiOutlineClose size={25}/></button>
      <form className='form' id={editData.id} onSubmit={handleSubmit}>
        <h2 className='heading02'>Edit Item</h2>
        <div>
          <label className='mb-2 block'>item</label>
          <input className='input' value={item} type='text' placeholder='item' onChange={(e) => setItem(e.target.value)}/>
        </div>
        <div>
          <label className='mb-2 block'>price</label>
          <input className='input' value={price} type='number' placeholder='price' onChange={(e) => setPrice(e.target.value)}/>
        </div>
        {each && <div><label className='mb-2 block'>each</label><input className='input' type='number' value={each} placeholder='price per piece: optional' onChange={(e) => setEach(e.target.value)}/></div>}
        
        <button className='w-full p-2 bg-sky-500 font-bold rounded-md text-white' type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default UpdateItemModal