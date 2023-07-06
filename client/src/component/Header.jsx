
import { AppBar, Toolbar,styled } from '@mui/material'
import {Menu} from '@mui/icons-material';

const StyledHeader =styled(AppBar)`
 background: #fff;
height: 70px;
`
const Menuicon =styled(Menu)`
color: #000;

`
const Image =styled('img')({
    height: 55,
    margin : 'auto',
    paddingRight: 70

})


const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
const Header = ()=>{
    return(
        <StyledHeader position="static">
            <Toolbar>
                <Menuicon/>
                <Image src={url} alt="logo"/> 
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;