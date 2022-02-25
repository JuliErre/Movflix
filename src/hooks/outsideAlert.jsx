import React, { useRef, useState, useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'


export const useOutsideAlerter = (initialValue) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(initialValue)
    const{onDetail,setOnDetail} = useContext(DataContext)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false)
       
            //setOnDetail(false)
        }

    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [ref])

    return { visible, setVisible, ref }

}



