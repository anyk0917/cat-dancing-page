import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [animationCount, setAnimationCount] = useState(0)

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const handleKeyPress = (event) => {
    if (event.code === 'Space') {
      event.preventDefault()
      handleToggleAnimation()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isAnimating])

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnimationCount(prev => prev + 1)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div className="stats">
        <p>춤춘 횟수: {animationCount}번</p>
        <p className="keyboard-hint">💡 스페이스바로도 제어 가능!</p>
      </div>
      
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img 
          src={catSvg} 
          alt="Dancing Cat" 
          className="cat-image"
          tabIndex={0}
        />
      </div>
      
      <div className="controls">
        <button 
          className="dance-button"
          onClick={handleToggleAnimation}
          aria-label={isAnimating ? 'Stop dancing animation' : 'Start dancing animation'}
        >
          {isAnimating ? '🛑 춤 멈추기' : '💃 춤 시작!'}
        </button>
      </div>
    </div>
  )
}

export default DancingCat