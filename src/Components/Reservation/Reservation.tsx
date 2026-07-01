import React from 'react'

export default function Reservation() {
    const x = [1,2,3]
  return (
    <>
            <div className='p-2'>
                <ul className='flex p-2'>
                    <li className='p-1'>No of coaches : 3</li>
                    <li className='p-1'>pool 1</li>
                    <li className='p-1'>{x.map((y: number) => {
                        return `-${y}`
                    })}</li>
                    <li className='p-1'>4:30-5:30</li>
                    <li className='p-1'>No of atheltes:40</li>
                    <li className='p-1'>paid : yes</li>
                    <li className='p-1'>reciept uploaded : yes</li>
                </ul>
                <ul className='flex p-2'>
                    <li className='p-1'>No of coaches : 3</li>
                    <li className='p-1'>pool 1</li>
                    <li className='p-1'>{x.map((y: number) => {
                        return y
                    })}</li>
                    <li className='p-1'>4:30-5:30</li>
                    <li className='p-1'>No of atheltes:40</li>
                    <li className='p-1'>paid : yes</li>
                    <li className='p-1'>reciept uploaded : yes</li>
                </ul>
                <ul className='flex p-2'>
                    <li className='p-1'>No of coaches : 3</li>
                    <li className='p-1'>pool 1</li>
                    <li className='p-1'>{x.map((y: number) => {
                        return y
                    })}</li>
                    <li className='p-1'>4:30-5:30</li>
                    <li className='p-1'>No of atheltes:40</li>
                    <li className='p-1'>paid : yes</li>
                    <li className='p-1'>reciept uploaded : yes</li>
                </ul>
            </div>
        </>
  )
}
