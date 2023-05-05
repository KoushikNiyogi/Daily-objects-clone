import { Box,Flex,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Filter from "./Filter"
import Sort from "./Sort"

const CombinedFilter_sort = (filter) => {
  const [state,setState] = useState(true);
  return (
    <Box padding={"15px"}>
      <Flex>
        <Button onClick={()=>setState(true)} marginRight={"20px"}>FILTER</Button>
        <Button onClick={()=>setState(false)}>SORT</Button>
      </Flex>
      <Box>
        {
          state ? <Filter/> : <Sort/>
        }
      </Box>
    </Box>
  )
}

export default CombinedFilter_sort