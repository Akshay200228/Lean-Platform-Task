import React from "react";
import { Typography } from "@material-tailwind/react";
import { mh } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LINKS = [
  {
    title: "Navigation",
    items: ["About Us", "Mentors", "Sessions", "Sign Up"],
  },
  {
    title: "Platform",
    items: ["Technology Park B-14 Asalpha Metro St, Mumbai, Maharashtra, India", "akshayrs096@gmail.com", "456-456-456"],
  },
  // {
  //   title: "Support Us",
  //   items: ["Blog", "Newsletter", "Events", "Help Center"],
  // },
  // {
  //   title: "Resource",
  //   items: ["Blog", "Newsletter", "Events", "Help Center"],
  // },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="relative w-full mt-20 mb-10"
      data-aos='fade-up' data-aos-delay='600'
    >
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <img src={mh} alt="logo6" className="w-[148px] h-[73px] mb-6" />
            <hr />

            <div className="flex mt-6 space-x-10">
              <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="p-2 text-xl rounded-full text-blue hover:text-white hover:bg-blue-800" />
              </a>
              <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="p-2 text-xl rounded-full text-blue hover:text-blue-400 hover:bg-sky-50" />
              </a>
              <a href="https://www.twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="p-2 text-xl text-blue hover:text-white hover:bg-blue-900" />
              </a>
              <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="p-2 text-xl rounded-full text-blue hover:text-white hover:bg-pink-500" />
              </a>
            </div>
          </div>
          <div className="grid justify-between grid-cols-2 gap-4 mt-6 md:grid-cols-2 md:mt-0">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 text-lg font-semibold text-[#00487C]"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors text-blu"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-blue-gray-50 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 font-normal text-center text-black md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="#">
              My Website
            </a>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
