
import './index.css';
import { Nav, Navbar, Container ,Col, Row} from 'react-bootstrap';
// import SlidingImages from './Component/slidingImages';
import BackgroundSlider from 'react-background-slider';

import image1 from './Assets/Images/slider1.jpg';
import image2 from './Assets/Images/slider2.jpg';
import image3 from './Assets/Images/slider3.jpg';

import {Card, CardContent, CardMedia, Grid, Typography  } from "@material-ui/core";

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:"column"}}>
      <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className='nav'> 
        <Nav className='fonttm'>Tek Music</Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className='font'>
          <Nav.Link></Nav.Link>
          <Nav>Shows</Nav>
          <Nav.Link></Nav.Link>
          <Nav>Achievements</Nav>
          <Nav.Link></Nav.Link>
          <Nav>Members</Nav>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
       </div>
          <div style={{display:"block"}}>
          <BackgroundSlider images={[image1, image2, image3]} duration={4} transition={1} />
          <div style={{margin:"auto",width:"300px",marginTop:"225px",textAlign:"center"}}>
          <p style={{color:"#E8E8E8"}}>Official music club of Psg College of Technology</p>     
          <button className="button">Join now</button>
          </div>
          </div>
      
      <div style={{marginTop:'500px',marginLeft:"3rem",marginRight:"3rem"}}>
      <Grid container spacing={8}>
        <Grid container item xs={12} sm={6} md={4} xl={2}>
          <Card >
            <CardMedia component="img" image={image1} style={{height:"250px",width:"100%"}}></CardMedia>
            <CardContent>
            <Typography variant="h4">About</Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sodales elit. 
            Sed pretium venenatis felis quis consequat. Proin sed lorem porta dolor condimentum imperdiet. 
            Vivamus vitae facilisis enim, in placerat felis. Nam eu hendrerit risus. Cras facilisis porta ex et varius. 
            Ut tortor arcu, ornare ut massa ut, ullamcorper feugiat felis.
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={12} sm={6} md={4} xl={2}>
          <Card >
            <CardMedia component="img" image={image2} style={{height:"250px",width:"100%"}}></CardMedia>
            <CardContent>
            <Typography variant="h4">About</Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sodales elit. 
            Sed pretium venenatis felis quis consequat. Proin sed lorem porta dolor condimentum imperdiet. 
            Vivamus vitae facilisis enim, in placerat felis. Nam eu hendrerit risus. Cras facilisis porta ex et varius. 
            Ut tortor arcu, ornare ut massa ut, ullamcorper feugiat felis.
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={12} sm={6} md={4} xl={2}>
          <Card >
            <CardMedia component="img" image={image3} style={{height:"250px",width:"100%"}}></CardMedia>
            <CardContent>
            <Typography variant="h4">Shows</Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sodales elit. 
            Sed pretium venenatis felis quis consequat. Proin sed lorem porta dolor condimentum imperdiet. 
            Vivamus vitae facilisis enim, in placerat felis. Nam eu hendrerit risus. Cras facilisis porta ex et varius. 
            Ut tortor arcu, ornare ut massa ut, ullamcorper feugiat felis.
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={12} sm={6} md={4} xl={2}>
          <Card >
            <CardMedia component="img" image={image1} style={{height:"250px",width:"100%"}}></CardMedia>
            <CardContent>
            <Typography variant="h4">Achievements</Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sodales elit. 
            Sed pretium venenatis felis quis consequat. Proin sed lorem porta dolor condimentum imperdiet. 
            Vivamus vitae facilisis enim, in placerat felis. Nam eu hendrerit risus. Cras facilisis porta ex et varius. 
            Ut tortor arcu, ornare ut massa ut, ullamcorper feugiat felis.
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={12} sm={6} md={4} xl={2}>
          <Card >
            <CardMedia component="img" image={image2} style={{height:"250px",width:"100%"}}></CardMedia>
            <CardContent>
            <Typography variant="h4">Members</Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sodales elit. 
            Sed pretium venenatis felis quis consequat. Proin sed lorem porta dolor condimentum imperdiet. 
            Vivamus vitae facilisis enim, in placerat felis. Nam eu hendrerit risus. Cras facilisis porta ex et varius. 
            Ut tortor arcu, ornare ut massa ut, ullamcorper feugiat felis.
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
      
      <div style={{height:"200px",backgroundColor:"#404040",marginTop:"80px"}}>
        <div style={{height:"100px",marginTop:"50px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
        <Typography style={{color:"#E8E8E8"}}>© Tek Music 2021 . PSG College of Technology</Typography> 
        <div style={{width:"100px",display:"flex",justifyContent:"space-evenly"}}>
        <InstagramIcon style={{color:"#E8E8E8"}}/>
        <FacebookIcon style={{color:"#E8E8E8"}} />
        <TwitterIcon style={{color:"#E8E8E8"}} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
