import React from 'react'

import { PosMeMuero } from '@components/SVGIcons'

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="column">
          <PosMeMuero size="154px" />
        </div>
        <div className="column">
          <h2>Mataste el aguacate</h2>
          <p>Lo tocaste tanto que lo mataste.</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: 154px 1fr;
          gap: 1rem;
          align-items: center;
        }
        h2 {
          font-size: 2rem;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
