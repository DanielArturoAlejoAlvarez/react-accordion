import React from 'react'
import { AccordionSection, Container } from './AccordionElems'
import { IconContext } from 'react-icons'
import { Data } from './Data'
import { FiPlus, FiMinus } from 'react-icons/fi'

const Accordion = () => {
  return (
    <IconContext.Provider value={{color: "#00FF89"}}>
      <AccordionSection>
        <Container>
          {Data.map((item,index)=>(
            <>
              <h1>{item.question}</h1>
              <p>{item.answer}</p>
            </>
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
    
  )
}

export default Accordion
