import React from 'react'
import Navbar from './Navbar'
import { UserAuth } from '../context/AuthContext'
import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import user from './Login'

export default function Home() {
  console.log(user)
  return (
    <div>
    <Navbar/>
    <br/>
    <br/>
    <br/>
      Customer ID: {user}
    <br/>
      Common Product Categories:

    </div>
  )
}
