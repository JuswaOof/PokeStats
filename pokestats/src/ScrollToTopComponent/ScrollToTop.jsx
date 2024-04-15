import React, { useState, useEffect } from 'react'

function ScrollToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop >= 500 && !isScrolled) {
        setIsScrolled(true)
      } else if (scrollTop < 1) {
        setIsScrolled(false)
      }
    }

    // Set initial scroll state
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isScrolled && (
        <div
          onClick={scrollToTop}
          style={{ position: 'fixed', bottom: '20%', left: '2%' }}
        >
          <div className='backGround'>
            <svg
              width='50'
              height='50'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollToTopButton
