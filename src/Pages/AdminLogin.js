
import Accordion from 'react-bootstrap/Accordion';
import '../Pages/AdminLogin.css';
import {FaUserCog} from 'react-icons/fa';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

import {  Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';


import myImage from '../assets/images/logo1.jpeg'; // Adjust the path as necessary
import mylogo from '../assets/images/logo2.jpeg';
import React, { useState } from 'react';




function AdminLogin() {
  const [activeKey, setActiveKey] = useState(null); // State to track the active accordion key

  const handleToggle = (eventKey) => {
    // If the clicked item is already open, close it, otherwise set it as active
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <div>
       <Row  mt-5 >
        <Col md={4} className='mt-5' >
          <img src={myImage} className="logo1"  alt="Logo 1" />
        </Col>
        <Col md={4} className='mt-3'>
          <h3 className='main-heading'>महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड</h3>
          <h2 className='heading-1'>नंदा गौरा योजना</h2>
        </Col>
       
        <Col md={4} className='mt-5' >
          <img src={mylogo} className="logo2"  alt="Logo 2" />
        </Col>
        </Row>
 <Row>
         <Col md={2}>
        </Col>

        <Col md={8} className='login-tabs'>
       

<h2 className='login-heading mt-2'><FaUserCog/> Admin Login</h2>

<div className="d-none d-md-block"> {/* Hide on mobile screens */}

<Tabs
      defaultActiveKey="Directorate Login"
      id="Admin-login-tabs"
      className="mb-3  tabs "
    >
      <Tab eventKey="Directorate Login" title="Directorate Login" >
        <Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Directorate" readOnly />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn mb-5' type="submit">
      Login
      </Button>
</Form>
        
      </Tab>
      <Tab eventKey="Technical Login" title="Technical Login" >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Technical " readOnly />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn mb-5' type="submit">
      Login
      </Button>
</Form>
        
        
      </Tab>
      <Tab eventKey="District Probation Login" title="District Probation Login " id="" >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="District " readOnly />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn mb-5' type="submit">
      Login
      </Button>
</Form>
        
       
      </Tab>
      <Tab eventKey="District Login (DPO)" title="District Login (DPO)" id="" >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="District Login (DPO)" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Choose District for samiti Login:</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Choose District Name</option>
      <option value="1">Almora</option>
      <option value="2">Bageshwar</option>
      <option value="3">Chamoli</option>
      <option value="3">Champawat</option>
      <option value="3">Dehradun</option>
      <option value="3">Haridwar</option>
      <option value="3">Nanital</option>
      <option value="3">Pauri garhwal</option>
      <option value="3">Rudrapariyag</option>
      <option value="3">Tihari garhwal</option>
      <option value="3">Usanager</option>
      <option value="3">Uttarkashi</option>
     
    </Form.Select>
       
      </Form.Group>
      
      


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn mb-5' type="submit">
      Login
      </Button>
</Form>
        
       
      </Tab>
      <Tab eventKey="Project login" title="Project login" id="" >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Project login" />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicOption">
          <Form.Label className='label-control'>Project Name</Form.Label>
          <Form.Select ><option selected disabled>choose project name</option>
         
          
          </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn mb-5' type="submit">
      Login
      </Button>
      </Form>

       
      </Tab>
      <Tab eventKey="Sector login" title="Sector login" id="">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Sector login" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Choose District for samiti Login:</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Choose District Name</option>
      <option value="1">Almora</option>
      <option value="2">Bageshwar</option>
      <option value="3">Chamoli</option>
      <option value="3">Champawat</option>
      <option value="3">Dehradun</option>
      <option value="3">Haridwar</option>
      <option value="3">Nanital</option>
      <option value="3">Pauri garhwal</option>
      <option value="3">Rudrapariyag</option>
      <option value="3">Tihari garhwal</option>
      <option value="3">Usanager</option>
      <option value="3">Uttarkashi</option>
     
    </Form.Select>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Choose Sector</Form.Label>
        <Form.Select aria-label="Default select example">
          <option value="1">Choose district to show Sector List</option>
          </Form.Select>
       
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn mb-5' type="submit">
      Login
      </Button>
      </Form>
        
      </Tab>
      

      

    </Tabs>
    </div>

    </Col>
    <div className="d-block d-md-none">
    {/* Mobile content or alternative view */}
    <Col md={2} sm={12} className='login-accordian'>
        <Accordion activeKey={activeKey}>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={() => handleToggle("0")}  className='head'>Directorate Login</Accordion.Header>
        <Accordion.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Directorate" readOnly />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn' type="submit">
      Login
      </Button>
</Form>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header onClick={() => handleToggle("1")}className='head'>Technical Login</Accordion.Header>
        <Accordion.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Technical " readOnly />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn' type="submit">
      Login
      </Button>
</Form>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header onClick={() => handleToggle("2")} className='head'>District Probation  Login</Accordion.Header>
        <Accordion.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="District " readOnly />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn' type="submit">
      Login
      </Button>
</Form>
        </Accordion.Body>
      </Accordion.Item>
     
      <Accordion.Item eventKey="3">
        <Accordion.Header onClick={() => handleToggle("3")} className='head'>District Login (DPO)</Accordion.Header>
        <Accordion.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="District Login (DPO)" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Choose District for samiti Login:</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Choose District Name</option>
      <option value="1">Almora</option>
      <option value="2">Bageshwar</option>
      <option value="3">Chamoli</option>
      <option value="3">Champawat</option>
      <option value="3">Dehradun</option>
      <option value="3">Haridwar</option>
      <option value="3">Nanital</option>
      <option value="3">Pauri garhwal</option>
      <option value="3">Rudrapariyag</option>
      <option value="3">Tihari garhwal</option>
      <option value="3">Usanager</option>
      <option value="3">Uttarkashi</option>
     
    </Form.Select>
       
      </Form.Group>
      
      


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn' type="submit">
      Login
      </Button>
</Form>
        </Accordion.Body>
      </Accordion.Item>
     
      <Accordion.Item eventKey="4">
        <Accordion.Header onClick={() => handleToggle("4")} className='head'>Project Login </Accordion.Header>
        <Accordion.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Project login" />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicOption">
          <Form.Label className='label-control'>Project Name</Form.Label>
          <Form.Select ><option selected disabled>choose project name</option>
         
          
          </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn mb-5' type="submit">
      Login
      </Button>
      </Form>

        </Accordion.Body>
      </Accordion.Item>
     
      <Accordion.Item eventKey="5">
        <Accordion.Header onClick={() => handleToggle("5")} className='head'>Sector Login </Accordion.Header>
        <Accordion.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Login Type</Form.Label>
        <Form.Control  type="email" placeholder="Sector login" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Choose District for samiti Login:</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Choose District Name</option>
      <option value="1">Almora</option>
      <option value="2">Bageshwar</option>
      <option value="3">Chamoli</option>
      <option value="3">Champawat</option>
      <option value="3">Dehradun</option>
      <option value="3">Haridwar</option>
      <option value="3">Nanital</option>
      <option value="3">Pauri garhwal</option>
      <option value="3">Rudrapariyag</option>
      <option value="3">Tihari garhwal</option>
      <option value="3">Usanager</option>
      <option value="3">Uttarkashi</option>
     
    </Form.Select>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>Choose Sector</Form.Label>
        <Form.Select aria-label="Default select example">
          <option value="1">Choose district to show Sector List</option>
          </Form.Select>
       
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>Password Login</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" className='login-btn' type="submit">
      Login
      </Button>
      </Form>
         </Accordion.Body>
      </Accordion.Item>
      </Accordion>
        </Col> 
  </div>
    
<Col md={2}>
</Col>
      </Row>
       
      
    </div>
  )
}

export default AdminLogin
