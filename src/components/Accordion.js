import React from 'react'
import { AccordionSection, Container } from './AccordionElems'
import { IconContext } from 'react-icons'
import { Data } from './Data'

const Accordion = () => {
  return (
    <IconContext.Provider value={{color: "#00FF89"}}>
      <AccordionSection>
        <Container>
          {Data.map((item,index)=>(
            
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
    
  )
}

export default Accordion
