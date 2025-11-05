import React from 'react'
import './index.css'
import girl from './assets/123.png'
import krug from './assets/krug1.png'
import krugs from './assets/krugs2.png'
import krugo from './assets/krugo3.png'
import krugf from './assets/krugf4.png'
import krugq from './assets/krugq5.png'
import kruga from './assets/kruga6.png'
import people from './assets/people.png'
import komnota from './assets/komnota.png'
import rectangle from './assets/rectangle.png'
import kabinet from './assets/kabinet.png'
import chashka from './assets/chashka.png'
import divan from './assets/divan.png'
import stuli from './assets/stuli.png'
import logo from './assets/logo.png'
import kavichki from './assets/logo.png'
import chel from './assets/chel1.png'
import chelik from './assets/chelik.png'
import devushka from './assets/devushka.png'
import man from './assets/man.png'
import krasivwoman from './assets/krasivwoman.png'
import paren from './assets/paren.png'
import zvezdochki from './assets/zvezdochki.png'
import zvezds from './assets/zvezds2.png'
import zvezda from './assets/zvezda3.png'
import zv from './assets/zv4.png'
import zvz from './assets/zvz5.png'
import zvezd from './assets/zvezd6.png'
import karta from './assets/karta.png'

function Servis() {
    return (
        <div>
            <section className="hero"
                id="home">
                <div className="container">
                    <h1>Make your business more powerful with us</h1>
                    <p>We provide various services to make your business grow and get bigger.Your satisfaction is our first priority.</p>
                    <a href="#contact"
                        className="btn">Get Started</a>
                </div>
            </section>


            <section className="services" id="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>The various services we provide to make your bussiness more powerful</p>
                    </div>
                    <div className="services-grid">
                        <div className="services-card">
                            <i className="fas falightbulb"></i>
                            <h3>Ideate</h3>
                            <p>We help you develop creative ideas so that your business can grow more rapidly</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-paint-brush"></i>
                            <h3>Design</h3>
                            <p>We provide services with the best designs than our designer team for your business</p>
                            <div className="service-card">
                                <i className="fas fa-code"></i>
                                <h3>Web Development</h3>
                                <p>We help develop company websites to be more professional and attractive</p>
                            </div>
                            <div className="service-card">
                                <li classNameName="fas fa-mobile-alt"></li>
                                <h3>App Development</h3>
                                <p>We help develop company mobil apps to be more professional and attractive</p>
                            </div>
                            <div className="service-car">
                                <i className="fas fa-chart-line"></i>
                                <h3>Business Growth</h3>
                                <p>We also provide services by providing input for your business growth</p>
                            </div>
                            <div className="service-card">
                                <li classNameName="fas fa-shopping-cart"></li>
                                <h3>Digital Marketing</h3>
                                <p>We also help you market your products through an online marketplace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="stats" id="about">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Documentation</h2>
                        <p>See what our profile is like and how we work for your business</p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>70K+</h3>
                            <p>We have more than customers</p>
                        </div>
                        <div className="stat-item">
                            <h3>100+</h3>
                            <p>Projects we have completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>200+</h3>
                            <p>Support from world-renowned companies</p>
                        </div>
                        <div className="prioriti-list">
                            <h3>Customer satisfaction is our first priority</h3>
                            <p>We serve many customers, ranging from small business, medium entrepreneurs, to world-renowned companies.Their satisfaction is our pleasure.We strive to provide the best service by:</p>
                            <ul className="priority-list">
                                <li><i className="fas fa-check"></i> Provide idea support from our creative team</li>
                                <li><i classNameName="fas fa-check"></i>Provide attractive and professional design services</li>
                                <li><i className="fas fa-check"></i>Support for service 24 hours a week</li>
                                <li><i className="fas fa-check"></i>Helping our customers to grow their bussiness</li>
                                <li><i className="fas fa-check"></i>Provide support to market products through online marketplace</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="workplace" id="works">
                <div class="container">
                    <div class="secction-title">
                        <h2>Working space</h2>
                        <p>Let s meet our interior room decoration</p>
                    </div>
                    <div class="workspace-grid">

                    </div>
                    <div class="workspace-item">
                        <img src={girl} alt="girl" />
                        <div class="overlay">
                            <h4></h4>
                        </div>
                    </div>
                    <div class="workspace-item">
                        <img src={krug} alt="krujok" />
                        <div class="overlay">
                            <h4></h4>
                        </div>
                    </div>
                    <div className="workspace-item"></div>
                    <div class="workspace-item">
                        <img src={krugs} alt="krujok" />
                        <div class="overlay">
                            <h4></h4>
                        </div>
                    </div>
                    <div className="workspace-item"></div>
                    <div class="workspace-item">
                        <img src={krugo} alt="krujok" />
                        <div class="overlay">
                            <h4></h4>
                        </div>
                    </div>
                </div>
                <div className="workspace-item"></div>
                <div class="workspace-item">
                    <img src={krugf} alt="krujok" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div className="workspace-item"></div>
                <div class="workspace-item">
                    <img src={krugq} alt="krujok" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div className="workspace-item"></div>
                <div class="workspace-item">
                    <img src={kruga} alt="krujok" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={people} alt="guest room" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={komnota} alt="komnota" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={rectangle} alt="rectan" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={kabinet} alt="kab" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={divan} alt="div" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={chashka} alt="cha" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={stuli} alt="stul" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={logo} alt="log" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={kavichki} alt="kav" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={chel} alt="chelik" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={chelik} alt="chel" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={devushka} alt="dev" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={man} alt="man" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={krasivwoman} alt="" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={paren} alt="par" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={zvezdochki} alt="zv" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={zvezd} alt="zv" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={zvezda} alt="zv" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={zv} alt="zv" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={zvz} alt="zv" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={zvezd} alt="zv" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
                <div class="workspace-item">
                    <img src={karta} alt="kar" />
                    <div class="overlay">
                        <h4></h4>
                    </div>
                </div>
            </section >
            <section class="clients">
                <div class="container">
                    <div class="section-title">
                        <h2>Some of Our Great Customers</h2>
                        <p>Some of the companies we have wored with</p>
                    </div>
                    <div class="ceo-section">
                        <p>We are serious about providing our best service to all the costomets we help.Customers satisfaction is our number one priority. </p>
                        <p class="ceo-name"> Mark Garfield
                            <span class="ceo-position">CEO & Head of Product</span></p>
                    </div>
                </div>
            </section>
            <section class="faq">
                <div class="container">
                    <div class="section-title">
                        <h2>Frequently Ask Quetion</h2>
                        <p>Some of our frequently asked qestions</p>
                    </div>
                </div>
                <div class="faq-container">
                    <div class="faq-item">

                        <div class="faq-question">What are the services provided to coustomers?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Hello,we provide various service to help your bussiness grow and develop.We help provide ideas,creat designs, develop websites and mobil applications,provide support for the growth of bussiness ideas,to help customers market their products online through the marketplace.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-qestion">How can I submit a proposal for cooperation?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question"> I come from a faraway place, can collaboration be done full time online through several meeting applications?
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-item">
                            <div class="faq-question">How do I get the payment complete?</div>


                        </div>

                    </div>
                    <div class="faq-item">
                        <div class="faq-question">How long can the collaboration last?</div>
                        <i class="fas fa-chevrone-down"></i>
                    </div>
                    <div class="faq-answer">

                    </div>
                </div>
            </section>
            <section class="testimonials">
                <div class="container">
                    <div class="section-title">
                        <h2>Testimonials</h2>
                        <p>Some testimonials from our customers</p>
                    </div>
                </div>
                <p>Lorem Ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
                <h4>Ronald Richards</h4>
                <div class="company">Google Inc.</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <h4>Guy Hawkins</h4>
                <div class="company">Paypal inc.</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <h4>Kristin Watson</h4>
                 <div class="company">Microsoft inc.</div>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                 <h4>Robert Fox</h4>
                 <div class="company">Facebook inc.</div>
                 <p>Lorem Ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
                 <h4>Savannah Nguyen</h4>
                 <div class="company">Twitter inc.</div>
                 <p>Lorem Ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
                 <h4>Courtney Henry</h4>
                 <div class="company">Apple inc.</div>

            

            </section>
            <section class="container">
                <h2>Are You Ready For</h2>
                <h2>Start a New Project</h2>
                <a href="#contact"
                class="btn">Start Now</a>
                
            </section>
            <section class="subscribe">
                <div class="container">
                    <div class="section-title">
                        <h2>Get Notified About Project</h2>
                        <h2>Subscribe Now</h2>
                        
            
               
                


                    </div>
                </div>
            </section>
            <footer id="contact">
                <div class="container">
                    <div class="footer-column">
                        <h3>Our Office</h3>
                        <h3>Contact</h3>
                        <p>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
                        <p>info@yourdomain.com</p>
                        <p>+62 (0) 000 0000 00</p>
                    </div>
                </div >
                <ul class="footer-links">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>© 2021 Creative Agency</p>
                    <p>Home</p>
                    <p>Works</p>
                    <p>About</p>
                    <p>Pricing </p>
                    <p>About</p>

                </ul>
            </footer>
            
        </div>
    )
}

export default Servis
