import { Box, Radio, RadioGroup, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sort = () => {
  const [searchparams,setSearchparams] = useSearchParams()
  const [value,setValue] = React.useState("");
  const handleChange = (e)=>{
    setValue(e)

  }

  useEffect(()=>{
    let params = {};
    searchparams.get("price_gt")!=undefined&&(params["price_gt"] = searchparams.get("price_gt"));
    searchparams.get("price_lt")!=undefined&&(params["price_lt"] = searchparams.get("price_lt"));
    searchparams.getAll("color").length!=0&&(params["color"] = searchparams.getAll("color"));
    searchparams.get("q")!=undefined&&(params["q"] = searchparams.get("q"));
    value!=""&&(params["sort"] = value);
    setSearchparams(params);
  },[value])
  return (
    <Box mt={"50px"}>
      <RadioGroup defaultValue='' onChange={(e)=>handleChange(e)}>
        <VStack alignItems={"flex-start"} spacing={4} direction='row'>
          <Radio value='1' isDisabled>
            POPULARITY
          </Radio>
          <Radio value='1' isDisabled>
            DISCOUNT
          </Radio>
          <Radio value='1' isDisabled>
            RATING
          </Radio>
          <Radio value='price#asc'>PRICE LOW TO HIGH</Radio>
          <Radio value='price#desc'>PRICE HIGH TO LOW</Radio>
        </VStack>
      </RadioGroup>
      
    </Box>
  )
}

export default Sort