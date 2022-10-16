import { useEffect, useState } from "react"
import staticPathGeneration from '../utils/staticPathGeneration'

const useStaticPathGeneration = (url) => {
  const [path, setPath] = useState()
  useEffect(() => {
    let transformedUrl
    if (Array.isArray(url)) {
      transformedUrl = url.map(u => staticPathGeneration(u))
    }
    else if (url) {
      transformedUrl = staticPathGeneration(url)
    }
    setPath(transformedUrl)
  }, [url])
  return path
}

export default useStaticPathGeneration