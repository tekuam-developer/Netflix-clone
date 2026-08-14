import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <div className="container footer-wraper">
        <div className="row align-items-center">
          <div className="col-12 col-sm contacts">
            <div className="footer-icons">
              <li>
                <FacebookOutlinedIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </div>
            <div>
              <li>Audio Discription</li>
              <li>Invertor Relations</li>
              <li>Legal Notice</li>
              <li>service code</li>
              <li>&copy; 1997-2024 Netflix, Inc</li>
            </div>
          </div>
          <div className="col-12 col-sm">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Preferences</li>
          </div>
          <div className="col-12 col-sm">
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Coorporate Information</li>
          </div>
          <div className="col-12 col-sm">
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
