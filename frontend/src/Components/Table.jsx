import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Ftable = (props) => {

   
    const str = props.item

    return (
        <Box width="100%" height="100%">
            <Heading fontSize="90%">{props.tile ? <h2>{props.title}</h2>:<img src={props.image}/>}</Heading>
            <Box marginTop="10px" fontSize="90%">
                {
                    str.map(ele => <h2>{ele.name}</h2>)
                }
            </Box>
        </Box>
    )
}

export default Ftable
