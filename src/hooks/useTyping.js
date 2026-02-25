import { useState, useEffect } from 'react'

export function useTyping(words, options = {}) {
  const { typeSpeed = 80, deleteSpeed = 50, delayBetween = 2000 } = options
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const timeout = isDeleting
      ? deleteSpeed
      : subIndex === word.length
        ? delayBetween
        : typeSpeed

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setSubIndex((s) => s - 1)
          if (subIndex === 0) {
            setIsDeleting(false)
            setIndex((i) => (i + 1) % words.length)
          }
        } else {
          setSubIndex((s) => s + 1)
          if (subIndex === word.length) {
            setIsDeleting(true)
          }
        }
      },
      subIndex === word.length && !isDeleting ? delayBetween : timeout
    )
    return () => clearTimeout(timer)
  }, [index, subIndex, isDeleting, words, typeSpeed, deleteSpeed, delayBetween])

  return words[index].slice(0, subIndex)
}
