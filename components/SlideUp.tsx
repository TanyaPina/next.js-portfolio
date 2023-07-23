"use client"
import React, { useEffect, useRef, ReactNode } from 'react'

interface Props {
    offset?: string
    children?: ReactNode
    // any props that come into the component
  }

const SlideUp = ({ children, offset = "0px" }: Props) => {
  return (
    <div>SlideUp</div>
  )
}

export default SlideUp