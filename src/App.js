import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputComponent from './components/input/Input';
import ListCompo from './components/list/List';
import { checkClick } from './redux/action';
function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((store)=> store);
  const keyPress = (e)=>{
    if(e.code !== 'Escape') return;
    dispatch(checkClick(false));
  };
  
  useEffect(()=>{
    document.addEventListener('keydown', keyPress, true);
    return(()=>{
      document.removeEventListener('keydown', keyPress, false)
    })
  },[])
  return (
    <>
        <Text as='h1' fontSize='40' align='center'  fontWeight='bold'
          mt={10}
          bgGradient="linear-gradient(60deg, #E21143, #FFB03A)"
          bgClip="text"
          color="transparent"
        >Todos</Text>
      <Box width='80%' maxWidth='500px' shadow={'lg'} m='auto' p={1}>
        <InputComponent />
        <ListCompo />
      </Box>
      {
        todos.length > 0 && (
          <>
            <Box shadow='dark-lg' width='78%' maxWidth='490px' m='auto' h={2}></Box>
            <Box shadow='dark-lg' width='76%' maxWidth='475px' m='auto' h={2}></Box>
          </>
        )
      }
    </>
  );
}

export default App;
