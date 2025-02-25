import React from 'react'

const Footer=()=> {
    const fields1=['About us','services','careers']
    const fields2=['Email: info@hrsolutions.com','Phone: +1 (123) 456-7890','UMBB ']
    const fields3=['LinkdIn','facebook','Github']


  return (
    <div>
        <div className='f1'> 
           <div> Quick links</div>
           <ul>
           {fields1.map((fields1)=>{
            return <li>{fields1}</li>
           })}
           </ul>
        </div>
        <div className='f2'>
            <div> Contact us</div>
            <ul>
                {fields2.map ((fields2)=>{
                    return <li>{fields2}</li>
                })}
            </ul>
        </div>

        <div className='f3'>
            <div> Contact us</div>
            <ul>
                {fields2.map ((fields3)=>{
                    return <li>{fields3}</li>
                })}
            </ul>
        </div>
        
    </div>
  )
}

export default Footer