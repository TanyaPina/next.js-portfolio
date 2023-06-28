"use client"
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItem {
  label: string
  page: string 
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  }
]

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar