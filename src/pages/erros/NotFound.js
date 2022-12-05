import React from 'react'
import { ResponseStripe } from '../admin/credit/styled.style'
import notFound from './imgs/notFound.jpg'

export const NotFound = () => {
  return (
    <>
      <div className='text-center mt-4'><h3>Página não encontrada</h3></div>
      <img src={notFound} className="img-fluid" />
    </>
  )
}
