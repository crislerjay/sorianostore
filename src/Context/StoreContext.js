import React, { createContext, useEffect, useState } from 'react';
import {
  collection,
  query,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from '../firebase-config';

export const StoreContext = createContext()

const StoreContextProvider = (props) => {
  const [data, setData] = useState([])
  const [editData, setEditData] = useState('');
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [idTodelete, setIdTodelete] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const toggleModal = () => {
    setShowAddModal(prevSetShowAddModal => !prevSetShowAddModal);
  }

  const toggleEditModal = () => {
    setShowEditModal(prevSetShowEditModal => !prevSetShowEditModal);
  }

  const handleAddItem = async (item, price, each) => {
    if (each === undefined) {
      await addDoc(collection(db, "items"), {
        item,
        price,
      });
    } else {
      await addDoc(collection(db, "items"), {
        item,
        price,
        each
      });
    }
  }

  const handleEdit = async (updatedItem) => {
    if(updatedItem.each) {
      await updateDoc(doc(db, "items", updatedItem.id), { item: updatedItem.item, price: updatedItem.price, each: updatedItem.each });
      toggleEditModal()
    } else {
      await updateDoc(doc(db, "items", updatedItem.id), { item: updatedItem.item, price: updatedItem.price });
      toggleEditModal()
    }
   
  };

  const openConfirmation = (id) => {
    setShowAlert(true)
    setIdTodelete(id)
    console.log(id);
  }

  const closeConfirmation = () => {
    setShowAlert(false)
  }

  const handleDelete = async () => {
    if (idTodelete != '') {
      await deleteDoc(doc(db, 'items', idTodelete))
      alert('item deleted')
      setShowAlert(false)
    }
  }

  useEffect(() => {
    const q = query(collection(db, 'items'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({...doc.data(), id: doc.id})
      });
      setData(itemsArr);
    });
    return () => unsub();
  }, []);


  const value = {
    data,
    setShowAddModal,
    showAddModal,
    toggleModal,
    setShowEditModal,
    showEditModal,
    toggleEditModal,
    handleDelete,
    handleAddItem,
    setEditData,
    editData,
    handleEdit,
    showAlert,
    openConfirmation,
    closeConfirmation
  }
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;