import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Ftable = (props) => {

   
    const str = props.item

    return (
        <Box width="100%" height="100%" paddingLeft="3%">
            {props.tile ?<Heading fontSize="90%">{props.title}</Heading>:<img src={props.image}/>}
            <Box marginTop="10px" fontSize="90%" textAlign="left">
                {
                    str.map(ele => <h2>{ele.name}</h2>)
                }
            </Box>
        </Box>
    )
}

export default Ftable
