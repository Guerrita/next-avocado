import React, { useState, useEffect } from 'react'
import PuesVivo from './AnimatedHeader'
import PuesMuero from './RottenHeader'
import ModalHeaderContent from './ModalHeaderContent'

const Header = () => {
  const [visible, setVisible] = useState(true)
  const [meMori, setMeMori] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [count, setCount] = useState(0)

  const closeModal = () => setModalOpen(false)
  const toggleVisible = () => setVisible((prevVisible) => !prevVisible)

  useEffect(() => {
    window.setTimeout(toggleVisible, 350)
  }, [])

  useEffect(() => {
    if (count === 4) {
      setMeMori(true)
      setModalOpen(true)
    }
    console.log(count)
  }, [count])

  return (
    <div className="container">
      {meMori ? (
        <PuesMuero />
      ) : (
        <PuesVivo
          visible={visible}
          onClick={() => setCount((prevCount) => prevCount + 1)}
          onComplete={toggleVisible}
        />
      )}

      {modalOpen && (
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
          }}
        >
          <div
          className='green'
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '5px',
            }}
          >
            <ModalHeaderContent />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                onClick={closeModal}
                className='button-fill'
              >
                Lo siento
              </button>
              <button
                onClick={closeModal}
                className='button-fill'
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>
        {`
          .container {
            margin: 2rem 0 3rem;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}

export default Header
