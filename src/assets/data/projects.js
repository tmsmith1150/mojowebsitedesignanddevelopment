import { v4 as uuidv4 } from 'uuid';
import CavinImg from '../images/cavinimg.jpg';
import TwvwImg from '../images/twvw.png';
import MernCartImg from '../images/mern-cartImg.png';
import CBOImgImg from '../images/cold-beer-openImg.png';
import BudgetTrackerImg from '../images/budget-trackerImg.png';
import ChelciImg from '../images/portrait_chelci.png';
import LakeImg from '../images/lakeHollisSite.png';
import SyncLynksImg from '../images/synclynks-ss.png';
import SweetFeet from '../images/sweetfeet.png';

const projects = [
  {
    id: uuidv4(),
    name: 'SyncLynks',
    desc: 'A sophisticated and highly functional website for an online jewelry business that specializes in luxury custom medical alert jewelry. Built using the MERN stack, the application offers a robust and dynamic user experience. The frontend, developed with React, features a responsive and interactive design, while Next.js enhances performance with server-side rendering and static site generation, ensuring fast load times and improved SEO. For secure user authentication, NextAuth is seamlessly integrated, allowing customers to create accounts, log in, and manage their profiles effortlessly.<br>The backend is powered by Express and Node.js, supporting essential functionalities such as user authentication, product management, and order processing. MongoDB serves as the primary database, efficiently managing user data, product details, and order histories. Additionally, the application is integrated with DynamoDB on AWS, providing enhanced scalability and performance.<br>Deployed on AWS, the site benefits from high availability, scalability, and security. The user experience is designed to reflect the elegance and premium quality of the custom medical alert jewelry, with features that make browsing, customizing, and purchasing products both seamless and luxurious. Overall, this MERN stack application delivers a powerful and visually appealing platform for selling luxury custom medical alert jewelry online.',
    img: SyncLynksImg,
    deployedLink: 'https://synclynks.vercel.app/',
  },
  {
    id: uuidv4(),
    name: 'Cold Beer Open',
    desc: 'For their annual Cold Beer Open golf tournament, clients Terry and Earl required a website that blended tradition and energy while modernizing their processes and communications. Catering to nearly 100 participants each year, the website was designed to reflect the lively spirit and rich history of the event. The application was built using React.js for a dynamic and interactive frontend, complemented by Reactstrap for responsive design elements. The backend is powered by Express, with MySQL managing the database and Passport handling secure authentication. Axios is used for efficient data fetching, while Animate.css adds engaging animations to enhance user experience. The result is a vibrant and modern website that aligns with the Cold Beer Open’s storied tradition.',
    img: CBOImgImg,
    deployedLink: 'https://www.coldbeeropen.org/',
  },
  {
    id: uuidv4(),
    name: 'The West Virginia Way',
    desc: 'Clients JJ and Melissa Tindall needed a website that captured their beautiful rental properties, scenic surroundings and the exhilarating ATV/UTV trail systems of West Virginia. This application allows users to view rooms, check availability, book reservations and make payment for their rental. Technologies used in this application include Wordpress, HTML, CSS, Elementor',
    img: TwvwImg,
    deployedLink: 'http://thewestvirginiaway.com/',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Sweet Feet Diabetic Socks',
  //   desc: 'The Sweet Feet Diabetic Socks website is a user-friendly platform designed to provide comprehensive information about our premium diabetic socks. The website offers an engaging, responsive design that ensures seamless integration, styling, and a smooth browsing experience across all devices. Our website not only highlights the unique features and benefits of our socks but also offers an easy-to-navigate interface for a pleasant online shopping experience. Technologies used in this application include Wordpress, HTML, CSS, Divi',
  //   img: SweetFeet,
  //   deployedLink: 'http://sweetfeetdiabeticsocks.com/',
  // },
  {
    id: uuidv4(),
    name: 'Lake Hollis Photography',
    desc: 'Navigate through this online portfolio to witness the breadth of Lake Holliss artistic vision. From intimate portraits that reveal the depth of human emotion to expansive landscapes that showcase the awe-inspiring beauty of the world, each photograph is a testament to Lakes dedication to his craft. Technologies used in this application are HTML, CSS, Javascript, React.js, Node',
    img: LakeImg,
    deployedLink: 'https://master.dv078p517j1n7.amplifyapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Full Stack eCommerce Cart',
    desc: 'This application incudes setting up the backend API to styling the components using pure css to create a fully responsive eCommerce Cart. Technologies used in this application are React.js, Redux, Node, MongoDB',
    img: MernCartImg,
    deployedLink: 'https://www.mojowebsitedesignanddevelopment.com/',
  },
  {
    id: uuidv4(),
    name: 'Chelci Hicks',
    desc: 'Artist Chelci Hicks',
    img: ChelciImg,
    deployedLink: 'https://www.mojowebsitedesignanddevelopment.com/',
  }
];

export default projects;
