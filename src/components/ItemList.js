import React, { useContext, useState } from 'react'
import {FaTrashAlt, FaEdit} from 'react-icons/fa';
import { StoreContext } from '../Context/StoreContext';
import UpdateItemModal from './UpdateItemModal';

function ItemList() {
  const {data, toggleEditModal, showEditModal, setEditData, openConfirmation} = useContext(StoreContext)
  const [searchKey, setSearchKey] = useState('');

  const getValues = (id, item, price, each) => {
    if (each === undefined) {
      const items = {id: id, item: item, price: price}
      setEditData(items)
    } else {
      const items = {id: id, item: item, price: price, each: each}
      setEditData(items)
    }
    toggleEditModal()
  }


  return (
    <>
    <div className='p-4'>
      <div className='search'><input placeholder='search' className='input rounded-lg' onChange={(e) =>  setSearchKey(e.target.value)} /></div>

      {
        data && data 
        .filter((item) => {
          if(searchKey === ""){
            return item;
          }else if(item.item.toLowerCase().includes(searchKey.toLowerCase())){
            return item;
          }
        })
        .map((item) => {
          return(
            <div className='card' key={item.id}>
              <div className='header flexcommon'>
                <h2 className='heading02 text-left'>{item.item}</h2>
                <div>
                  <button onClick={() => getValues(item.id, item.item, item.price, item.each)} className='mr-4'><FaEdit size={20}/></button>
                  <button onClick={() => openConfirmation(item.id)}><FaTrashAlt size={20}/></button>
                </div>
              </div>
              <div className='flexcommon'>
                <p className='price'>Price: {item.price}</p>
                <p className='each'>{item.each ? `Price: ${item.each} each` : ''}</p>
              </div>
            </div>
          )
        })
      }
    </div>

    {showEditModal && <UpdateItemModal />}
    </>
  )
}

export default ItemList