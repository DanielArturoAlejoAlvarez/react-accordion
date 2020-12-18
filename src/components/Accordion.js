import React, { useState } from 'react'
import { AccordionSection, Container, Wrap } from './AccordionElems'
import { IconContext } from 'react-icons'
import { Data } from './Data'
import { FiPlus, FiMinus } from 'react-icons/fi'

const Accordion = () => {

  const [clicked, setClicked] = useState(false)

  const toggle = (index)=>{
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <IconContext.Provider value={{color: "#00FF89"}}>
      <AccordionSection>
        <Container>
          {Data.map((item,index)=>(
            <>
              <Wrap onClick={()=>toggle(index)} key={index}>
                <h1>{item.question}</h1>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrap>
              <p>{item.answer}</p>
            </>
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
    
  )
}

export default Accordion
