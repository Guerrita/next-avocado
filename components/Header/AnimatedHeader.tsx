import React from 'react'
import { Avocado } from '@components/SVGIcons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <h1 style={{fontSize: "3rem", textAlign: "center"}}>
    Avo
    <div
      style={{ display: "inline-block", animation: visible ? "jiggle 900ms" : "none"}}
      onAnimationEnd={onComplete}
      onClick={onClick}
    >
      <Avocado size="58px" />
    </div>
    Cado
  </h1>
)

export default AnimatedHeader
