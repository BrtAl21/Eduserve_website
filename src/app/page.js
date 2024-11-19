'use client';

import React from 'react';
import styles from './page.module.css';
import { Row,Col,Input,Button,Typography,Pagination,Card} from 'antd';
import {UserOutlined,SyncOutlined,Html5Outlined,DribbbleOutlined,UsergroupAddOutlined,CodepenOutlined,FieldTimeOutlined,PhoneOutlined,MailOutlined,TeamOutlined,GlobalOutlined,TwitterOutlined,AntDesignOutlined,AndroidOutlined,EnvironmentOutlined,InstagramOutlined,ChromeOutlined,YoutubeOutlined,LinkedinOutlined} from '@ant-design/icons'
import Image from 'next/image';

const {Title,Paragraph} = Typography;
const {TextArea} = Input;

export default function Home() 
{
  const fun1 = () =>
  {
    document.getElementById('myImage').src='/course-img-1.jpg';
    document.getElementById('a').innerHTML = 'Nural Networking' ;
  }
  const fun2 = () =>
  {
    document.getElementById('myImage').src='/course-img-2.jpg';
    document.getElementById('a').innerHTML = 'Learning PHP' ;
  }
  const fun3 = () =>
  {
    document.getElementById('myImage').src='/course-img-3.jpg';
    document.getElementById('a').innerHTML = 'Learning Python' ;
  }
  const fun4 = () =>
  {
    document.getElementById('myImage').src='/course-img-4.jpg';
    document.getElementById('a').innerHTML = 'Creative Design' ;
  }
  const fun5 = () =>
  {
    document.getElementById('myImage').src='/course-img-5.jpg';
    document.getElementById('a').innerHTML = 'HTML5/CSS3 Essentials' ;
  }
  const fun6 = () =>
  {
    document.getElementById('myImage').src='/course-img-6.jpg';
    document.getElementById('a').innerHTML = 'Art of Photography' ;
  }
  const input1 = () =>
  {
    document.getElementById('in1').style.border = '1px solid white';
  }
  const input2 = () =>
  {
    document.getElementById('in2').style.border = '1px solid white';
  }
  const input3 = () =>
  {
    document.getElementById('in3').style.border = '1px solid black';
  }
  const textarea = () =>
  {
    document.getElementById('textarea').style.border = '1px solid white';
  }
  return (
// Home

      <div id='home' className={styles.body}>

          <section className={styles.bgimage1}>

            <Row className={styles.navbar}>
              <Col md={4} className={styles.col1}>
                <center>
                  <Image src='/logo.png' width={250} height={41} alt='next' />
                </center>
              </Col>

              <Col md={8}>
                  <ul className={styles.ul}>
                    <li>
                      <a href='#home' className={styles.list}>Home</a>
                    </li>
                    <li>
                      <a href='#courses' className={styles.list}>Courses</a>
                    </li>
                    <li>
                      <a href='#services' className={styles.list}>Services</a>
                    </li>
                    <li>
                      <a href='#teachers' className={styles.list}>Teachers</a>
                    </li>
                    <li>
                      <a href='#clients' className={styles.list}>Clients</a>
                    </li>
                    <li>
                      <a href='#blog' className={styles.list}>Blog</a>
                    </li>
                    <li>
                      <a href='#contact' className={styles.list}>Contact</a>
                    </li>
                  </ul>
              </Col>
          </Row>

          <br/><br/><br/><br/><br/><br/><br/><br/>

          <div>
            <Row>
              <Col md={2}></Col>
              <Col md={10}>
                <h1 className={styles.h1body}>Present Education in Beautiful Way</h1>
                <p className={styles.pbody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                <br/>
                <a className={styles.bodybuttoncontent1}>START LEARN NOW</a>
              </Col>
              <Col md={10}>
                <center>
                  <img src='/main.png' width='75%' />
                </center>
              </Col>
              <Col md={2}></Col>
            </Row>
          </div>
          </section>

          <br/><br/><br/>

            <Row>
              <Col md={6} className={styles.col2}>
                <UserOutlined className={styles.iconbox1} />
                <h3 className={styles.h3box1}>WHO WE ARE</h3>
                <p className={styles.pbox1}>Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              </Col>

              <Col md={6} className={styles.col3}>
                <SyncOutlined className={styles.iconbox2} />
                <h3 className={styles.h3box2}>OUR MISSION</h3>
                <p className={styles.pbox2}>Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              </Col>
              <Col md={6} className={styles.col4}>
                <GlobalOutlined className={styles.iconbox3} />
                <h3 className={styles.h3box3}>OUR VISSION</h3>
                <p className={styles.pbox3}>Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              </Col>
            </Row>
          
          <br/><br/><br/><br/>

          <div id='courses'>
            <Row>
              <Col md={24} className={styles.courserow}>
                  <h2 className={styles.courseh2}>Popular Courses</h2>
                  <span className={styles.coursespan}>A modern and unique style</span>
              </Col>
            </Row>

            <Row>
              <Col md={2}></Col>

              <Col md={3} className={styles.col5} onClick={fun1}>
                <UserOutlined className={styles.iconbox4} />
                <h3 className={styles.h3box4}>NETWORKING</h3>
              </Col>

              <Col md={3} className={styles.col6} onClick={fun2}>
                <UserOutlined className={styles.iconbox5} />
                <h3 className={styles.h3box5}>PHP</h3>
              </Col>

              <Col md={3} className={styles.col7} onClick={fun3}>
                <UserOutlined className={styles.iconbox6} />
                <h3 className={styles.h3box6}>PYTHON</h3>
              </Col>

              <Col md={3} className={styles.col8} onClick={fun4}>
                <AntDesignOutlined className={styles.iconbox7} />
                <h3 className={styles.h3box7}>DESIGN</h3>
              </Col>

              <Col md={3} className={styles.col9} onClick={fun5}>
                <Html5Outlined className={styles.iconbox8} />
                <h3 className={styles.h3box8}>HTML5/CSS3</h3>
              </Col>

              <Col md={3} className={styles.col10} onClick={fun6}>
                <UserOutlined className={styles.iconbox9} />
                <h3 className={styles.h3box9}>PHOTOGRAPHY</h3>
              </Col>

              <Col md={3}></Col>
              
            </Row>

            <br/><br/>

            <Row>
              <Col md={2}></Col>
              <Col md={20}>
                <Row className={styles.tabcontent1}>
                  <Col md={12}>
                    <img src='/course-img-1.jpg' id='myImage' className={styles.coursesimage} width={540} height={420} />
                  </Col>
                  <Col md={12}>
                    <h3 id='a' className={styles.bodyheadcontent1}>Nural Networking</h3>
                    <p className={styles.bodyparacontent1}>Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine</p>
                    <ul className={styles.bodylistcontent1}>
                      <li className={styles.listitems1}>Pig swine prosciutto rump pork chop</li>
                      <li className={styles.listitems2}>Tail spare ribs capicola flank shank</li>
                      <li className={styles.listitems3}>24-hour Supports for any courses</li>
                      <li className={styles.listitems4}>Beef ribs sirloin cupim frankfurter</li>
                    </ul>
                    <a className={styles.bodybuttoncontent1}>START LEARN NOW</a><br/>
                  </Col>
                </Row>
              </Col>
              <Col md={2}></Col>
            </Row>
          </div>

          <br/><br/><br/><br/><br/>

          <div id='services'>
            <section className={styles.bgimage2}>
              <Row>
                <Col md={2}></Col>
                <Col md={10}>
                  <h1 className={styles.h1body}>Why Choose Us</h1>
                  <p className={styles.servicepara}>Education can Change Your Life! So what are you waiting for?</p>
                </Col>
                <Col md={10}>
                  <img src='/teacher-image.png' width='50%' className={styles.servicesimg} />
                </Col>
                <Col md={2}></Col>
              </Row>

              <Row>
                <Col md={2}></Col>
                <Col md={6} className={styles.servicecol1}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>TRENDING COURSES & CERTIFIED COURSES</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className={styles.servicecol2}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>BOOKS LIBERARY & ONLINE E-BOOKS</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className={styles.servicecol3}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>CERTIFIED TEACHERS & GUARANTEED CAREER</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
              
              <Row className={styles.servicesrow2}>
                <Col md={2}></Col>
                <Col md={6} className={styles.servicecol1}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>TRENDING COURSES & CERTIFIED COURSES</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className={styles.servicecol2}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>BOOKS LIBERARY & ONLINE E-BOOKS</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className={styles.servicecol3}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>CERTIFIED TEACHERS & GUARANTEED CAREER</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>

              <Row className={styles.servicesrow3}>
                <Col md={2}></Col>
                <Col md={6} className={styles.servicecol1}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>TRENDING COURSES & CERTIFIED COURSES</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className={styles.servicecol2}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>BOOKS LIBERARY & ONLINE E-BOOKS</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={6} className={styles.servicecol3}>
                  <Row>
                    <Col md={8}>
                      <center>
                        <TwitterOutlined className={styles.servicelogo} />
                      </center>
                    </Col>
                    <Col md={16}>
                      <h3 className={styles.servicecolh3}>CERTIFIED TEACHERS & GUARANTEED CAREER</h3>
                    </Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
            </section>
          </div>

          

          <div id='teachers' style={{background:'white'}}>

            <br/><br/><br/><br/>

            <Row>
              <Col md={24} className={styles.teacherrow}>
                  <h2 className={styles.teacherh2}>Our Teachers</h2>
                  <span className={styles.teacherspan}>A modern and unique style</span>
              </Col>
            </Row>

            <Row>
              <Col md={2}></Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-2.jpg' width='90%' className={styles.teacherimg1} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle1}>Brito Alex</Title>
                        <Paragraph className={styles.teacheroverlayparagraph1}>Game Developer</Paragraph>
                        <hr className={styles.teacheroverlayhr1} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-7.jpg' width='90%' className={styles.teacherimg2} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle2}>Shankar</Title>
                        <Paragraph className={styles.teacheroverlayparagraph2}>Software Testing Engineer</Paragraph>
                        <hr className={styles.teacheroverlayhr2} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-3.jpg' width='90%' className={styles.teacherimg3} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle3}>Nisha Devi</Title>
                        <Paragraph className={styles.teacheroverlayparagraph3}>Software Testing Engineer</Paragraph>
                        <hr className={styles.teacheroverlayhr3} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-4.jpg' width='90%' className={styles.teacherimg4} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle4}>Kumaravel</Title>
                        <Paragraph className={styles.teacheroverlayparagraph4}>Full-Stack Developer</Paragraph>
                        <hr className={styles.teacheroverlayhr4} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>

            <Row className={styles.teacherrow2}>
              <Col md={2}></Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-5.jpg' width='90%' className={styles.teacherimg5} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle5}>Harini</Title>
                        <Paragraph className={styles.teacheroverlayparagraph5}>Web Developer</Paragraph>
                        <hr className={styles.teacheroverlayhr5} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-6.jpg' width='90%' className={styles.teacherimg6} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle6}>Bhuvanesh</Title>
                        <Paragraph className={styles.teacheroverlayparagraph6}>Full-Stack Developer</Paragraph>
                        <hr className={styles.teacheroverlayhr6} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-1.jpg' width='90%' className={styles.teacherimg7} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle7}>Priya</Title>
                        <Paragraph className={styles.teacheroverlayparagraph7}>Back-End Developer</Paragraph>
                        <hr className={styles.teacheroverlayhr7} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={5} className={styles.teachercard}>
                <img src='/teacher-image-8.jpg' width='90%' className={styles.teacherimg8} />
                <div className={styles.teacheroverlay}>
                    <Row>
                      <Col md={24} className={styles.teacheroverlaycontent}>
                        <Title level={4} className={styles.teacheroverlaytitle8}>Kavin</Title>
                        <Paragraph className={styles.teacheroverlayparagraph8}>Software Testing Engineer</Paragraph>
                        <hr className={styles.teacheroverlayhr8} />

                        <br/>

                        <Row>
                          <Col md={9}>
                            <center>
                              <TwitterOutlined className={styles.teacheroverlayicon1} />
                            </center>
                          </Col>
                          <Col md={6}>
                            <center>
                              <InstagramOutlined className={styles.teacheroverlayicon2} />
                            </center>
                          </Col>
                          <Col md={9}>
                            <center>
                              <AntDesignOutlined className={styles.teacheroverlayicon3} />
                            </center>
                          </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>

            <br/><br/><br/><br/><br/>
          </div>

          <br/><br/><br/><br/>

          <Row>
            <Col md={24} className={styles.teacherrow}>
                <h2 className={styles.teacherh2}>Affordable Packages</h2>
                <span className={styles.teacherspan}>A modern and unique style</span>
            </Col>
          </Row>

          <br/><br/>
          
          <Row>
            <Col md={2}></Col>
            <Col md={6} className={styles.teachercard1}>
              <h3 className={styles.teachercardh3}>STANDARD</h3>
              <sup className={styles.teachercardspan1}>$ </sup><strong className={styles.teachercardspan2}>99</strong><span className={styles.teachercardspan3}>/month</span>
              <p className={styles.teacherpara}>100 MB Disk Space</p>
              <p className={styles.teacherpara}>2 Subdo mains</p>
              <p className={styles.teacherpara}>5 Email Accounts</p>
              <p className={styles.teacherpara}>No License</p>
              <p className={styles.teacherpara}>Phone & Mail Support</p>
              <br/>
              <a className={styles.teacherbutton}>CHOOSE PLAN</a>
            </Col>
            <Col md={1}></Col>
            <Col md={6} className={styles.teachercard2}>
              <h3 className={styles.teachercardh3}>BUSINESS</h3>
              <sup className={styles.teachercardspan1}>$ </sup><strong className={styles.teachercardspan2}>199</strong><span className={styles.teachercardspan3}>/month</span>
              <p className={styles.teacherpara}>100 MB Disk Space</p>
              <p className={styles.teacherpara}>2 Subdo mains</p>
              <p className={styles.teacherpara}>5 Email Accounts</p>
              <p className={styles.teacherpara}>No License</p>
              <p className={styles.teacherpara}>Phone & Mail Support</p>
              <br/>
              <a className={styles.teacherbutton}>CHOOSE PLAN</a>
            </Col>
            <Col md={1}></Col>
            <Col md={6} className={styles.teachercard3}>
              <h3 className={styles.teachercardh3}>PREMIUM</h3>
              <sup className={styles.teachercardspan1}>$ </sup><strong className={styles.teachercardspan2}>350</strong><span className={styles.teachercardspan3}>/month</span>
              <p className={styles.teacherpara}>100 MB Disk Space</p>
              <p className={styles.teacherpara}>2 Subdo mains</p>
              <p className={styles.teacherpara}>5 Email Accounts</p>
              <p className={styles.teacherpara}>No License</p>
              <p className={styles.teacherpara}>Phone & Mail Support</p>
              <br/>
              <a className={styles.teacherbutton}>CHOOSE PLAN</a>
            </Col>
            <Col md={2}></Col>
          </Row>

          <br/><br/><br/><br/><br/>

          <div id='clients'>
            <section className={styles.clientbgimage1}></section>
            <section className={styles.clientbgimage2}>
              <div className={styles.clientbgcolor}>
                <br/><br/><br/><br/>
                <Row>

                  <Col md={6} className={styles.clientcol1}>
                    <Row>
                      <Col md={24}>
                        <UserOutlined className={styles.clienticon1} /> <Title level={3} className={styles.clienth31}>54</Title>
                        <Title level={6} className={styles.clienth61}>Teachers</Title>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6}>
                    <Row>
                      <Col md={24}>
                        <CodepenOutlined className={styles.clienticon2} /> <Title level={3} className={styles.clienth32}>65</Title>
                        <Title level={6} className={styles.clienth62}>Courses</Title>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6}>
                    <Row>
                      <Col md={24}>
                        <UsergroupAddOutlined className={styles.clienticon3} /> <Title level={3} className={styles.clienth33}>1100</Title>
                        <Title level={6} className={styles.clienth63}>Members</Title>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6}>
                    <Row>
                      <Col md={24}>
                        <DribbbleOutlined className={styles.clienticon4} /> <Title level={3} className={styles.clienth34}>15</Title>
                        <Title level={6} className={styles.clienth64}>Countries</Title>
                      </Col>
                    </Row>
                  </Col>

                </Row>
              </div>
            </section>
          </div>

          

          <div id='blog'>
          <br/><br/><br/><br/>
            <Row>
              <Col md={24} className={styles.blogrow}>
                  <h2 className={styles.blogh2}>Recent News</h2>
                  <span className={styles.blogspan}>A modern and unique style</span>
              </Col>
            </Row>

            <Row className={styles.blogrow1}>
              <Col md={5} className={styles.blogcol1}>
                <Card className={styles.blogcard1} cover={<img src='/img-1.jpg' className={styles.blogimage1} />}>
                  <Row className={styles.blogrow1}>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara1}><TeamOutlined className={styles.blogicon1} /> 15 July 2019</Paragraph>
                      </center>
                    </Col>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara2}><FieldTimeOutlined className={styles.blogicon2} /> 18 Nov 2019</Paragraph>
                      </center>
                    </Col>
                  </Row>

                  <hr className={styles.bloghr}/>
                      
                  <Title level={4} className={styles.blogtitle}>Education can Change <br/> Your Life! So go ahead</Title>
                </Card>
              </Col>

              <Col md={5} className={styles.blogcol2}>
                <Card className={styles.blogcard1} cover={<img src='/img-2.jpg' className={styles.blogimage1} />}>
                  <Row className={styles.blogrow1}>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara1}><TeamOutlined className={styles.blogicon1} /> 15 Nov 2019</Paragraph>
                      </center>
                    </Col>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara2}><FieldTimeOutlined className={styles.blogicon2} /> 18 Nov 2019</Paragraph>
                      </center>
                    </Col>
                  </Row>

                  <hr className={styles.bloghr}/>
                  
                  <Title level={4} className={styles.blogtitle}>Education can Change <br/> Your Life! So go ahead</Title>
                </Card>
              </Col>

              <Col md={5} className={styles.blogcol3}>
                <Card className={styles.blogcard1} cover={<img src='/img-3.jpg' className={styles.blogimage1} />}>
                  <Row className={styles.blogrow1}>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara1}><TeamOutlined className={styles.blogicon1} /> 15 Nov 2019</Paragraph>
                      </center>
                    </Col>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara2}><FieldTimeOutlined className={styles.blogicon2} /> 18 Nov 2019</Paragraph>
                      </center>
                    </Col>
                  </Row>

                  <hr className={styles.bloghr}/>
                  
                  <Title level={4} className={styles.blogtitle}>Education can Change <br/> Your Life! So go ahead</Title>
                </Card>
              </Col>

              <Col md={5} className={styles.blogcol4}>
                <Card className={styles.blogcard1} cover={<img src='/img-4.jpg' className={styles.blogimage1} />}>
                  <Row className={styles.blogrow1}>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara1}><TeamOutlined className={styles.blogicon1} /> 15 Nov 2019</Paragraph>
                      </center>
                    </Col>
                    <Col md={12}>
                      <center>
                        <Paragraph className={styles.blogpara2}><FieldTimeOutlined className={styles.blogicon2} /> 18 Nov 2019</Paragraph>
                      </center>
                    </Col>
                  </Row>

                  <hr className={styles.bloghr}/>
                    
                  <Title level={4} className={styles.blogtitle}>Education can Change <br/> Your Life! So go ahead</Title>
                </Card>
              </Col>
            </Row>

            <br/>

            <center>
              <Pagination defaultCurrent={1} total={20} />
            </center>

          </div>

          <br/><br/><br/><br/>

          <div id='contact'>
            <section className={styles.contactbgimage}>
              <div className={styles.contactbgcolor}>
                
                <br/><br/><br/><br/>
                
                <center>
                  <h2 className={styles.contacth2}>Contact Us</h2>
                  <span className={styles.contactspan}>Do you have any Questions?</span>
                </center>

                <br/><br/>

                <Row>
                  <Col md={2}></Col>
                  <Col md={6} className={styles.contactcol1}>
                    <h3 className={styles.contacth3}><EnvironmentOutlined className={styles.contacticon1} />ADDRESS</h3>
                    <p className={styles.contactpara}>Patricia Place, <br/> 16th Avenue Norteast, USA</p>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={6} className={styles.contactcol2}>
                    <h3 className={styles.contacth3}><MailOutlined className={styles.contacticon1} />EMAIL</h3>
                    <p className={styles.contactpara}>info@business.com <br/> support@business.com</p>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={6} className={styles.contactcol3}>
                    <h3 className={styles.contacth3}><PhoneOutlined className={styles.contacticon1} />PHONE</h3>
                    <p className={styles.contactpara}>+1 (424) 652-5294 <br/> +1 (424) 652-5282.</p>
                  </Col>
                  <Col md={2}></Col>
                </Row>

                <br/>

                <Row>
                  <Col md={2}></Col>
                  <Col md={6}>
                    <h3 className={styles.contactrow2h3}>Get in Touch</h3>
                    <p className={styles.contactrow2para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={13}>
                    <Row>
                      <Col md={11} className={styles.contactcol4}>
                        <Input type='text' name='name' placeholder='Your name' id='in1' className={styles.contactinput1} onMouseOut={input1} /> 
                      </Col>
                      <Col md={1}></Col>
                      <Col md={11} className={styles.contactcol4}>
                        <Input type='text' name='email' placeholder='Email address' id='in2' className={styles.contactinput2} onMouseOut={input2} />
                      </Col>
                    </Row>

                    <br/><br/>

                    <TextArea rows={4} maxLength={3} placeholder='Enter your message' className={styles.textarea} onMouseOut={textarea} id='textarea' />

                    <br/><br/><br/>

                    <Button className={styles.contactbutton}>Send Message</Button>
                  </Col>
                  <Col md={2}></Col>
                </Row>

                <br/><br/><br/><br/><br/>

                <Row>
                  <Col md={5}></Col>
                  <Col md={14} className={styles.contactsubscribe}>
                    <Title className={styles.contactsubscribetitle}>Subscribe to our Newsletter</Title><br/>
                    <Paragraph className={styles.contactsubscribepara}>Dantes remained confused and silent by this explanation of the, <br/> consectetur adipisicing elit,</Paragraph><br/>
                    <center>
                      <Input  id='in3' type='text' placeholder='Email Address' className={styles.contactsubscribeinput} onMouseOut={input3} /><a className={styles.contactsubscribebut}>Submit</a>
                    </center>

                    <br/><br/><br/>
                    
                  </Col>
                  <Col md={5}></Col>
                </Row>

                <br/><br/><br/>

                <Row className={styles.contactrowicon}>
                  <Col md={24}>
                    <center>
                      <Button icon={<TwitterOutlined />} className={styles.contactfootericons}></Button>
                      <Button icon={<InstagramOutlined />} className={styles.contactfootericons}></Button>
                      <Button icon={<ChromeOutlined />} className={styles.contactfootericons}></Button>
                      <Button icon={<YoutubeOutlined />} className={styles.contactfootericons}></Button>
                      <Button icon={<LinkedinOutlined />} className={styles.contactfootericons}></Button>
                    </center>
                  </Col>
                </Row>
                
                <br/><br/>

                <Row>
                  <Col md={24}>
                    <center>
                      <p className={styles.footerhead1}>Copyright &copy; 2020 <a className={styles.footeranchor}>CODESTAR</a></p><br/><br/>
                    </center>
                  </Col>
                </Row>
              </div>
            </section>
          </div>


      </div>
    );
}