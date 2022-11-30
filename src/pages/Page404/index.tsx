import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()
  const destination = '/'

  useEffect(() => {
    navigate(destination)
  }, [navigate])

  return null
}

export default Page404
