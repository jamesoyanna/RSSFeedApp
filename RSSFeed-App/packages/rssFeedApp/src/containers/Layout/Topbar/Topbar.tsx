import { Link } from 'react-router-dom';
import {
  TopbarWrapper,
  Logo,
  LogoImage,
} from './Topbar.style';
import Logoimage from 'assets/image/rss-feed.png';



const Topbar = ({ refs }: any) => {
 

  return (
    <TopbarWrapper ref={refs}>
      <Logo>
        <Link to="/">
          <LogoImage src={Logoimage} alt="rrs-feed" />
        </Link>
      </Logo>
     
    </TopbarWrapper>
  );
};

export default Topbar;
