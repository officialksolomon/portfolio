import Head from 'next/head';
import Navigation from '../components/Navigation';
import PicsFrame from '../components/PicsFrame';
import Social from '../components/Social';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    // <Navigation/>;
    <div>
      <Container fluid className="h-100">
        <Row className="h-100 d-flex  no-gutter">
          <Col className="col1 bg-dark  h-100 order-sm-0 order-2 d-none d-sm-block">
            <Container >
               <div className="col1-div mt-2 d-flex flex-column align-items-center justify-content-start"> 
              <div  className='d-flex justify-content-between align-items-center p-0' >
                {/* <div  className='circle rounded-circle bg-light text-white m-0' > 123 </div> */}
                 <h6 className="text-white my-name m-5 d-none d-md-block">Solomon Uche </h6>
             </div>
              <div class="headline align-self-start d-none d-sm-block">
                <h1 className="text-white ml-5">Be Creative,</h1>
                <h1 className="text-white mr-5"> Be Innovative.</h1>
              </div>
              <p className="role  fw-bold align-self-start">
                Full Stack Software Engineer.
              </p>
              <p className="intro">
                I have to be able to communicate ideas to a wide range of
                stakeholders in both my own voice and in Sprout's. Communicating
                on social.
              </p>

              <div>
                <button className="portfolio-btn btn btn-light ">
                  {' '}
                  Portfolio
                </button>
                <a className="text-white " href="#">
                  Curricullum Vitae
                </a>
              </div>
              <Social />
            </div>
           </Container>
          </Col>

          <Col className="col2 bg-dark h-100 m-0">
            <Navigation />
            <div className="col2-div d-flex flex-column justify-content-center align-items-center">
              <PicsFrame
                name="Solomon Uche"
                role="Full Stack Software Engineer"
              />
              {/* show at certain */}
               <Container fluid className="d-block d-sm-none m-0">
               <div className="col1-div mt-2 d-flex flex-column align-items-center justify-content-start"> 
              <div  className='d-flex justify-content-center align-items-center p-0' >
                {/* <div  className='circle rounded-circle bg-light text-white m-0' > 123 </div> */}
                 <h6 className="text-white my-name m-5 d-none d-md-block">Solomon Uche </h6>
             </div>
              <div class="headline align-self-start ">
                <h1 className="text-white ml-5">Be Creative,</h1>
                <h1 className="text-white mr-5"> Be Innovative.</h1>
              </div>
              <p className="role fw-bold align-self-start">
                Full Stack Software Engineer.
              </p>
              <p className="intro">
                I have to be able to communicate ideas to a wide range of
                stakeholders in both my own voice and in Sprout's. Communicating
                on social.
              </p>

              <div className="d-flex ">
                <button className="portfolio-btn btn btn-light pt-0 pb-0">
                  {' '}
                  Portfolio
                </button>
                <a className="text-white btn btn-outline" href="#">
                  Curricullum Vitae
                </a>
              </div>
              <Social />
            </div>
           </Container>
            </div>
          </Col>
        </Row>
      </Container>

      {/* css/styles */}
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
