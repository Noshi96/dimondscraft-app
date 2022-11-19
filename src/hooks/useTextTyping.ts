import React, { useEffect } from 'react'

export function useTextTyping(
  delay: (ms: number) => Promise<unknown>,
  setText: React.Dispatch<React.SetStateAction<string>>
) {
  const textToDisplay = 'We Forge The Future'

  useEffect(() => {
    async function typeText() {
      await delay(1200)
      let i = 0
      const interval = setInterval(async () => {
        let newLetter = textToDisplay[i++]
        setText((prev) => prev.concat(newLetter))
        if (i === textToDisplay.length) {
          clearInterval(interval)
        }
      }, 60)
    }
    typeText()
  }, [delay, setText])
}
