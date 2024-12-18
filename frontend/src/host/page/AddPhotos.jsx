import { ImagePlus } from 'lucide-react'
import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../context/HotelDetailContext'


const AddPhotos = () => {

    const inputFile=useRef()

    const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

    const changeHandler=(e)=>{
        setHotelDetails((prv)=>({...prv,photos:[e.target.files]}))
    }
    console.log(hotelDetails);

    useEffect(()=>{
        if(hotelDetails.photos.length>0){
            setBtnDisable(false)
        }
    },[hotelDetails.photos])
    return (
        <>
            <div className=' w-full'>
                <div className='my-16'>
                    <h1 className='text-4xl font-bold text-center mb-5'>Add some photos of your house</h1>
                    <p className='text-xl font-bold text-center'>You'll need 5 photos to get started. You can add more or make changes later.</p>
                </div>
                <div onClick={()=>inputFile.current.click()} className='border-2 border-dotted border-neutral-800 rounded-md w-1/2 mx-auto text-center p-5 h-[400px] cursor-pointer'>
                    <ImagePlus strokeWidth={1} size={100} className='mx-auto' />
                    <p className='text-3xl'>Drag your photos here</p>
                    <p className='text-xl my-3'>Choose at least 5 photos</p>
                    <p className='underline text-xl'>Upload from your device</p>
                    <input onChange={changeHandler} multiple ref={inputFile} type="file" hidden />
                </div>
            </div>
        </>
    )
}

export default AddPhotos