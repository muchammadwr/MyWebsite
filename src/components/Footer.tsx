import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-800 p-4 md:p-8 lg:py-8">
      <div className="m-auto flex flex-col items-center justify-center gap-4 lg:max-w-5xl">
        <ul className="flex flex-row gap-8">
          <a href="https://github.com/muchammadwr">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-3x w-8 text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
            />
          </a>
          <a href="https://www.linkedin.com/in/muchammadwr/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-3x w-8 text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
            />
          </a>
          <a href="https://medium.com/@muchammadwr">
            <FontAwesomeIcon
              icon={faMedium}
              className="fa-3x w-8 text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
            />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfmrpwjkVzGtsRWBctdxrMhHpMfmjXBPhJMTtJFdXpjxZBbbbLszGHtRrtbcxmFlmFnRzL">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa-3x w-8 text-neutral-400 hover:text-neutral-200 focus:text-neutral-200"
            />
          </a>
        </ul>
        <p className="text-neutral-400">
          &#169; 2024 Muchammad Wildan Alkautsar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
