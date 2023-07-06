import Header from './component/Header';
import {Box,styled} from '@mui/material';
import Infoheader from './component/Infoheader';
import Articles from './component/Articles';

const  INfoheaderr = styled(Box)(({theme}) => ({
// padding: 37px 270px 5px 270px;
// borderRadius: 5px;
width: '60%',
margin: '40px auto 0 auto',
[theme.breakpoints.down('md')]: {
  width: '75%'
},
[theme.breakpoints.down('sm')]: {
  width: '85%'
}
}))


function App() {
  return (
    <Box>

    <Header/>

    <INfoheaderr>

    <Infoheader/>
    <Articles/>

    </INfoheaderr>

    </Box>
  );
}

export default App;
