import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs';

export const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Lorem Ipsum, giving information on its origins, as well as a
                random
              </p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
}
