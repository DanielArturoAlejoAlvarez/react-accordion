import styled from 'styled-components'

export const AccordionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #FFF;
  height: 100vh;
`
export const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153,153,153,.3);
`


export const Wrap = styled.div`
  background: #272727;
  border: 1px solid rgba(153,153,153,.3);
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`

export const Dropdown = styled.div`
  background: #1C1C1C;
  color: #00FFB9;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00FFB9;
  border-top: 1px solid #00FFB9;

  p {
    font-size: 2rem;
  }
`

