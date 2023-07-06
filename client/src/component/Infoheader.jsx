
import  {Box,Typography,styled} from '@mui/material';

const Container=styled(Box)(({theme})=> ({
    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItem: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
   

const Text =styled(Typography)`
font-size: 14px;
font-weight: 300;
margin-left: 50px;
margin-top: 13px;
`
const Imageee = styled('img')(
    {
        height:34,
        '&:last-child': {
            margin: '5px 50px 0 20px'
        }
    }
)
const Infoheader = ()=>{
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text>
            For the best experience use <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3Dinshorts_mobile&pli=1"><b style={{color: 'white'}}>Inshort</b></a> app on your smartphone
            </Text>
            <Box style={{display: 'flex', marginLeft: 'auto'}}>
            <Imageee src={appleStore} alt="applestorlogo" style={{marginTop: 5}}/>
            <Imageee src={googleStore} alt="googleStorelogo" />
            </Box>
          
        </Container>
    )
}

export default Infoheader;