import { Box,Flex,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Filter from "./Filter"
import Sort from "./Sort"

const CombinedFilter_sort = (filter) => {
  const [state,setState] = useState(true);
  return (
    <Box padding={"15px"}>
      <Flex>
        <Button borderRadius={"20px"} bgColor={state ? "#20a87e" : "#afafaf"} color={"white"} onClick={()=>setState(true)} marginRight={"20px"}>FILTER</Button>
        <Button borderRadius={"20px"} bgColor={state ? "#afafaf" : "#20a87e"} color={"white"} onClick={()=>setState(false)}>SORT</Button>
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