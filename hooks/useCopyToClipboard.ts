import { useState } from "react"

export const useCopyToClipboard = () => {
  const [copy, setCopy] = useState(false)

  const onCopySuccess = () => {
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 1000)
  }

  return { copy, onCopySuccess }
}
