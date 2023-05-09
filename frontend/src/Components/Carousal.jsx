import { Box, Stack } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Slider = () => {

    const data = [
        { image: "https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,dpr-1" },
        { image: "https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,dpr-1", caption: "Elijah Mikaleson 2" },
        { image: "https://images.dailyobjects.com/marche/assets/images/other/charging-solution-ups.jpg?tr=cm-pad_crop,v-2,dpr-1", caption: "Elijah Mikaleson 3" },
        { image: "https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,dpr-1" },
        { image: "https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,dpr-1", caption: "Elijah Mikaleson 2" },
        { image: "https://images.dailyobjects.com/marche/assets/images/other/charging-solution-ups.jpg?tr=cm-pad_crop,v-2,dpr-1", caption: "Elijah Mikaleson 3" },
        
    ]
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
    }
    return (<Stack width="100%" margin="auto"  >
        <Slide width="100%" height="100%" border="1px solid purple">
            {data.map((slideImage, index) => (
                <Box key={index} className="each-slide" style={divStyle} height={{ base: "100%", md: "100%" }}>
                    <img src={slideImage.image} width="100%" height="100%" />
                </Box>
            ))}
        </Slide>
    </Stack>


    )
}


export default Slider