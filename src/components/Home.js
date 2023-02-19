import React, { useContext } from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import { StoreContext } from '../Context/StoreContext';
import AddItemModal from './AddItemModal';
import ItemList from './ItemList';
import Notif from './Notif';
function Home() {

  const {toggleModal, showAddModal, showAlert} = useContext(StoreContext)

  return (
    <>
    <nav className='flexcommon p-4 bg-indigo-500'>
      <h1 className='text-2xl font-bold text-white'>Soriano Store</h1>
      <button onClick={() => toggleModal()}><AiOutlinePlus size={25} /></button>
    </nav>
    {showAddModal && <AddItemModal />}
    {showAlert && <Notif />}
    <ItemList />
    </>
  )
}

export default Home