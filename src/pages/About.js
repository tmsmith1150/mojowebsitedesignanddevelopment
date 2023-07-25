import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/banner-18.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import GlobalStyles from '../styles/GlobalStyle';
import Typography from '../styles/Typography';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: #858c8a;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      width: 300px;
      height: 300px;
      filter: brightness(70%);
      margin-left: 60px;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__info__item {
      max-width: 300px;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <GlobalStyles />
        <Typography />
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Michelle Jordan</span>
            </p>
            <h2 className="about__heading">Software Developer</h2>
            <div className="about__info">
              <PText>
                Utilizing innovative perspectives, I am deeply enthusiastic about crafting dynamic and impactful websites aimed at elevating user experiences. My commitment lies in comprehending your vision and adeptly assisting you in surmounting any obstacles encountered.
                <br /> <br />
                Should your website fail to accurately mirror your core objectives, mission statement, and strategic direction, its initial impression upon users may not align with your intended representation.
                <br />
                <br />I possess the expertise to facilitate the articulation of your image and brand identity through the proficient construction of your website. Leveraging cutting-edge technologies and industry-leading development practices, I am dedicated to establishing a compelling online presence on your behalf.
              </PText>
            </div>
            {/* <Button btnText="Download CV" btnLink="#" /> */}
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>

            <AboutInfoItem
              items={['American Business and Fashion Institute']}
              desc={['Associate Degree: Interior Design']}
            />
            <AboutInfoItem
              items={['University Of North Carolina']}
              desc={['Certificate: Full Stack Web Development']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={[
                'React',
                'HTML',
                'CSS/SASS',
                'JavaScript/ES6',
                'Wordpress',
              ]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node', 'Express', 'MySql/MongoDB']}
            />
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'Illustrator', 'Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>

            <AboutInfoItem
              title="2023-present"
              items={[
                'Frontend Software Developer at Bank of America',
              ]}
            /><AboutInfoItem
              title="2020-present"
              items={[
                'Software Developer at MJ Web Design and Development',
              ]}
            />
            <AboutInfoItem
              title="2021"
              items={[
                'Software Developer/Training Manager at Furniture Retail Operations Group ',
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
