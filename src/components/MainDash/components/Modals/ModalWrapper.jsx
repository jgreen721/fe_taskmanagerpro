import React from 'react'
import BoardModal from './BoardModal'
import TaskModal from './TaskModal'
import DestructiveModal from './DestructiveModal'
import { useAppContext } from '../../../../context/AppContext'

const ModalWrapper = () => {
  const {showModal,modalSpec,currBoard} = useAppContext();
  return (
    <div className={showModal ? "modal-wrapper show-modal" : "modal-wrapper"}>
        {modalSpec.is_board == true ? <BoardModal utility={modalSpec.type} boardname={currBoard}/> : <TaskModal utility={modalSpec.type}/>}
    </div>
  )
}

export default ModalWrapper