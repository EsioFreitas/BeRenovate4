import React from 'react';

import { Container } from './styles';
import teamPhoto from '../../assets/images/reno4-home-team.png';
import contruction from '../../assets/images/reno4-home-icon1.png';
import eletrics from '../../assets/images/reno4-home-icon2.png';
import plubing from '../../assets/images/reno4-home-icon3.png';

function Main() {
  return (
    <Container>
      <header>
        <div className="container">
          <div className="header-content">
            <h1>
              From A to Z
              <br />
              renovation
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              maecenas accumsan lacus vel facilisis.
            </p>
            <button className="btn-primary btn">Hire us today </button>
            <div className="header-content__footer">
              <p>
                Find more about us <br /> on our funpages{' '}
              </p>
              <div>
                <div className="header-content__footer--icon"></div>
                <div className="header-content__footer--icon"></div>
                <div className="header-content__footer--icon"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="about">
            <img src={teamPhoto} alt="team" className="about__image" />
            <div className="about__content">
              <h2>
                We offer a wide variety of services for office spaces. We will
                help you create a great looking work area for high productivity.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                maecenas accumsan lacus vel facilisis.
              </p>
              <button className="btn btn-secondary"> About us</button>
              <div className="about__photo"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2 className="services__title">
            We have a vast offer that <br />
            covers all renovation needs
          </h2>

          <div className="services__card-container">
            <div className="services__card">
              <img src={contruction} alt="construction" />
              <h3>Construction</h3>
              <p>
                ConstructionLorem ipsum dolor sit amet, consectetur adipiscing
                elit, seagna aliqua maecenas accum lacus vel facilisis.
              </p>
              <p className="services__card--prices">
                Prices from <span>$30/m</span>
              </p>
            </div>

            <div className="services__card">
              <img src={eletrics} alt="Electrics" />
              <h3>Electrics</h3>
              <p>
                Electrics ipsum dolor sit amet, consectetur adipiscing elit,
                seagna aliqua maecenas accum lacus vel facilisis.
              </p>
              <p className="services__card--prices">
                Prices from <span>$30/m</span>
              </p>
            </div>

            <div className="services__card">
              <img src={plubing} alt="Plumbing" />
              <h3>Plumbing</h3>
              <p>
                Plumbing ipsum dolor sit amet, consectetur adipiscing elit,
                seagna aliqua maecenas accum lacus vel facilisis.
              </p>
              <p className="services__card--prices">
                Prices from <span>$30/m</span>
              </p>
            </div>
          </div>

          <div className="services__footer">
            <p>
              Labore et dolore magna aliqua it enim ad minim <br />
              veniam, quis nostrud exercitation
            </p>
            <button className="btn btn-primary">Our offer</button>
          </div>
        </div>
      </section>
      <section>
        <h2>Take a look at our realizations</h2>
        <div>Carosel</div>
        <button>See our work</button>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
          <br />
          dolore eu fugiat nulla pariatur excepteur sint.
        </p>
      </section>

      <section>
        <div>icon</div>
        <div>
          <h3>
            Call us if you have <br />a question
          </h3>
          <div>
            <div>
              <div>icon</div>
              <p>+95 454 959</p>
            </div>
            <div>
              <div>icon</div>
              <p>noreply@envato.com</p>
            </div>
          </div>
          <p>
            Duis aute n <b>9:00am – 6:00pm</b> reprehenderit <br />
            in voluptae eu ceptsint.
          </p>
        </div>
      </section>
    </Container>
  );
}

export default Main;
