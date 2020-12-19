# REACT ACCORDION V1

## Description

This repository is a Software of Application with React.

## Installation

Using React 17.0.1 preferably.


## Usage

```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/react-accordion[NAME APP]

$ yarn install 

$ yarn start
```

Follow the following steps and you're good to go! Important:

![alt text](https://reactjsexample.com/content/images/2018/04/React-Accordion.gif)

## Coding

### Component

```javascript
...
const Accordion = () => {

  const [clicked, setClicked] = useState(false)

  const toggle = (index)=>{
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <IconContext.Provider value={{color: "#00FF89", size: '25px'}}>
      <AccordionSection>
        <Container>
          {Data.map((item,index)=>(
            <>
              <Wrap onClick={()=>toggle(index)} key={index}>
                <h1>{item.question}</h1>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}              
            </>
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
    
  )
}
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/react-accordion. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

```

```