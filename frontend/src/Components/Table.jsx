import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Ftable = (props) => {

    const title = props.title
    const str = props.item

    return (
        <Box>
            <Heading fontSize="90%">{title}</Heading>
            <Box marginTop="10px" fontSize="90%">
                {
                    str.map(ele => <h2>{ele.name}</h2>)
                }
            </Box>
        </Box>
    )
}

export default Ftable
