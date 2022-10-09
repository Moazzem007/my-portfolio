import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio1.jpg';
import IMG2 from '../../asset/portfolio2.jpg';
import IMG3 from '../../asset/portfolio3.jpg';
import IMG4 from '../../asset/portfolio4.jpg';
import IMG5 from '../../asset/portfolio5.png';
import IMG6 from '../../asset/portfolio6.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 1,
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19599117-Public-Opinion-Situation-Awareness-Large-Screen-Design",
  },
  {
    id: 2,
    image: IMG2,
    title: 2,
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19599166-Electric-Car-Charging-Station-3D-Illustration",
  },
  {
    id: 3,
    image: IMG3,
    title: 3,
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19599117-Public-Opinion-Situation-Awareness-Large-Screen-Design",
  },
  {
    id: 4,
    image: IMG4,
    title: 4,
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19599527-p-letter-real-estate-agent-logo-real-estate-company-logo-design",
  },
  {
    id: 5,
    image: IMG5,
    title: 5,
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19599455-Perfume-Web-Header",
  },
  {
    id: 6,
    image: IMG6,
    title: 6,
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19599128-educational-illustration",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title } />
                </div>
                <h3>{ title}</h3>
                <div class="portfolio__item-cta">
                  <a href={github } className='btn' target="_blank">
                    Github
                  </a>
                  <a
                    href={demo }
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
        
      </div>
    </section>
  );
}
