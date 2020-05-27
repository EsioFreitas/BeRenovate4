import React from 'react';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <header>
        <div>
          <h1>
            From A to Z
            <br />
            renovation
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua maecenas
            accumsan lacus vel facilisis.{' '}
          </p>
          <button>Hire us today </button>
          <div>
            <p>Find more about us</p>
            <div>
              <div>icon </div>
              <div>icon </div>
              <div>icon </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <img src="" alt="team" />
        <div>
          <h2>
            We offer a wide variety of services for office spaces. We will help
            you create a great looking work area for high productivity.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua maecenas
            accumsan lacus vel facilisis.
          </p>
          <button>About us</button>
        </div>
      </section>
      <section>
        <h2>
          We have a vast offer that <br />
          covers all renovation needs
        </h2>

        <div>
          <div>
            <img src="" alt="construction" />
            <h3>Construction</h3>
            <p>
              ConstructionLorem ipsum dolor sit amet, consectetur adipiscing
              elit, seagna aliqua maecenas accum lacus vel facilisis.
            </p>
            <p>
              Prices from <span>$30/m</span>
            </p>
          </div>

          <div>
            <img src="" alt="Electrics" />
            <h3>Electrics</h3>
            <p>
              Electrics ipsum dolor sit amet, consectetur adipiscing elit,
              seagna aliqua maecenas accum lacus vel facilisis.
            </p>
            <p>
              Prices from <span>$30/m</span>
            </p>
          </div>

          <div>
            <img src="" alt="Plumbing" />
            <h3>Plumbing</h3>
            <p>
              Plumbing ipsum dolor sit amet, consectetur adipiscing elit, seagna
              aliqua maecenas accum lacus vel facilisis.
            </p>
            <p>
              Prices from <span>$30/m</span>
            </p>
          </div>
        </div>

        <div>
          <p>
            Labore et dolore magna aliqua it enim ad minim <br />
            veniam, quis nostrud exercitation
          </p>
          <button>Our offer</button>
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
