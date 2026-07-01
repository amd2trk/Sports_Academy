import React from 'react'

export default function Team() {
    /* Add API and looping logic */
    const x = [1, 2, 3, 4]
    return (
        <>
            <div className='p-2'>
                <ul className='flex p-2'>
                    <li className='p-1'>Ahmed</li>
                    <li className='p-1'>Attendence: 85%</li>
                    <li className='p-1'>{x.map((y: number) => {
                        return y
                    })}</li>
                    <li className='p-1'>paid : yes</li>
                </ul>
                <ul className='flex p-2'>
                    <li className='p-1'>Ahmed</li>
                    <li className='p-1'>Attendence: 85%</li>
                    <li className='p-1'>{x.map((y: number) => {
                        return y
                    })}</li>
                    <li className='p-1'>paid : yes</li>
                </ul>
                <ul className='flex p-2'>
                    <li className='p-1'>Ahmed</li>
                    <li className='p-1'>Attendence: 85%</li>
                    <li className='p-1'>{x.map((y: number) => {
                        return y
                    })}</li>
                    <li className='p-1'>paid : yes</li>
                </ul>
            </div>
        </>
    )
}
