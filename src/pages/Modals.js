import React, { useState } from 'react'
import { FocusOn } from 'react-focus-on'

import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import Button from '../components/Button'
import Backdrop from '../components/Backdrop'
import Transition from '../components/Transition'
import Modal from '../components/Modal/Modal'
import ModalHeader from '../components/Modal/ModalHeader'
import ModalBody from '../components/Modal/ModalBody'
import ModalFooter from '../components/Modal/ModalFooter'

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <PageTitle>Modals</PageTitle>
      <CTA />

      <div>
        <Button onClick={openModal}>Open modal</Button>
      </div>

      <Transition show={isModalOpen}>
        <>
          <Transition
            enter="transition ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Backdrop onClick={closeModal} />
          </Transition>
          <Transition
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 transform translate-y-1/2"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0  transform translate-y-1/2"
          >
            <Modal id="modal" onClose={closeModal}>
              <ModalHeader>Modal header</ModalHeader>
              <ModalBody>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi
                repudiandae voluptatem tempore!
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={closeModal}
                  className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                >
                  Cancel
                </button>
                <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  Accept
                </button>
              </ModalFooter>
            </Modal>
          </Transition>
        </>
      </Transition>
    </>
  )
}

export default Modals