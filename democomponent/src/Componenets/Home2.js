import React from 'react';
import '../App.css';  // Import the App.css file

const Home2 = () => {
  return (
    <div>
      {/* Header */}
      
      <nav className="navbar bg-custom">
  <ul className="nav">
    <li className="nav-item">
      <a className="nav-link" href="#home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#about">About Us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#services">Services</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#gallery">Gallery</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contact">Contact Us</a>
    </li>
  </ul>
</nav>


      {/* Hero Section */}
      <section className="hero-section" id="home">
        {/* <img src="/images/Mahindra Scorpio-N car new lunch in India in 2022 (1).jpeg" alt="Premium Car" width={"50%"} /> */}
        <div className="text-overlay">
          <h1>Premium Car Storage</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5" id="about">
        <div className="container">
          <h2 className="section-title">About EightyEight Detailing</h2>
          <div className="row">
            <div className="col-md-6">
              <img src="/images/BMW Wallpaper.jpeg" alt="Bike" className="img-fluid mb-2" />
            </div>
            <div className="col-md-6">
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. Lorem Ipsum is
                that it has a more-or-less normal distribution of letters, as opposed to using
                Many desktop publishing...
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 services" id="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="row text-center">
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-car fa-2x"></i>
              </div>
              <h4>Premium Car Detailing</h4>
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-warehouse fa-2x"></i>
              </div>
              <h4>Premium Car Storage</h4>
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-paint-brush fa-2x"></i>
              </div>
              <h4>Paint Protection Film (PPF)</h4>
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="col-md-3 service-box">
              <div className="service-icon mb-3">
                <i className="fa fa-users fa-2x"></i>
              </div>
              <h4>Private Events</h4>
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 gallery" id="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="/images/3205f7d4-e7ae-4388-9a20-5701f090f048.jpeg" alt="Gallery Image 1" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Tata Motors Cars - Sedans, Hatchbacks, SUVs _ Tata Motors Limited.jpeg" alt="Gallery Image 2" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Audi R8 V10 special edition.jpeg" alt="Gallery Image 3" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Pin By Anucha P Rang On Bmw Cars Bmw Wallpapers Bmw M3 Bmw.jpeg" alt="Gallery Image 4" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/Audi R8 V10 special edition.jpeg" alt="Gallery Image 5" className="img-fluid" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/b7fe452a-8c9b-46c2-91e0-518f7508ef40.jpeg" alt="Gallery Image 6" className="img-fluid" />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary">View All Gallery</button>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-5 contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch With Us</h2>
          <div className="row">
            <div className="col-md-6">
              <img src="/images/Mahindra Scorpio-N car new lunch in India in 2022 (1).jpeg" alt="Contact Car" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Follow Us:</h5>
              <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-white">Home</a></li>
                <li><a href="#about" className="text-white">About Us</a></li>
                <li><a href="#services" className="text-white">Services</a></li>
                <li><a href="#gallery" className="text-white">Gallery</a></li>
                <li><a href="#contact" className="text-white">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li><a href="#services" className="text-white">Premium Car Detailing</a></li>
                <li><a href="#services" className="text-white">Premium Car Storage</a></li>
                <li><a href="#services" className="text-white">Paint Protection Film (PPF)</a></li>
                <li><a href="#services" className="text-white">Private Events</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>Copyright © 2024 EightyEight Detailing. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home2;
