import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full p-4 md:p-8 lg:py-8 bg-neutral-800">
      <div className="m-auto flex flex-col items-center justify-center gap-4 lg:max-w-5xl">
        <ul className="flex flex-row gap-4">
          <a href="">
            <FontAwesomeIcon icon={faGithub} className="fa-3x" />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-3x hover:text-fountainBlue "
            />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faMedium} className="fa-3x" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
          </a>
        </ul>
        <p className="text-tiara">&#169; 2024 Muchammad Wildan Alkautsar</p>
      </div>
    </footer>
  );
};

export default Footer;
