
export default function PersonalTab() {
  return (
    /* Add API logic */
    <>
     <div className='flex p-2'>
        <div className='p-2 w-1/2'>
          <ul>
            <li className='p-2 '>Name: Ahmed</li>
            <li className='p-2 '>Age : 23</li>
            <li className='p-2 '>Position : Coach</li>
            <li className='p-2 '>Sport:Swimming</li>
            <li className='p-2 '>Teams under : 2</li>
            <li className='p-2 '>Atheletes under : 16</li>
          </ul>
        </div>
        <div className='w-1/2'>
          <img src="../../../public/profile.png" alt="" />
        </div>
     </div>
    </>
  )
}
