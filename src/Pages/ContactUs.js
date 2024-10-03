import React from 'react'
import '../Pages/ContactUs.css';

import myImage from '../assets/images/logo1.jpeg'; // Adjust the path as necessary
import mylogo from '../assets/images/logo2.jpeg';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';




function ContactUs()  {
  return (
    <div>
      <Row>
      <Col md={4} className='mt-5' >
          <img src={myImage} className="logo1"  alt="Logo 1" />
        </Col>
        <Col md={4} className='mt-5'>
          <h2 className='main-heading'>महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड</h2>
          <h2 className='heading-1'>नंदा गौरा योजना</h2>
          <h4>District Wise Nodal Officer Contact Details</h4> 
         
        </Col>
        
        <Col md={4} className='mt-5' >
          <img src={mylogo} className="logo2"  alt="Logo 2" />
        </Col>
       

      </Row>
      <Row> 
        <p className='heading-2'>विभागीय कर्मियों से कॉल के दौरान अनुशाशनहीनता किये जाने पर वैधानिक कार्यवाही की जाएगी |</p>
<p className='heading-2'>Legal action will be taken if there is indiscipline during the call.</p>
          </Row>
      
        <Table striped bordered hover className='table-content'>
      <thead>
        <tr>
          <th> S.no</th>
          <th>District</th>
          <th>Officer Name</th>
          <th>Mobile No.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Almora</td>
          <td>RAJEEV KUMAR TIWARI</td>
          <td>9897435045</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bageshwar</td>
          <td>DEEPAK JOSHI</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Chamoli</td>
          <td>ANIL KUMAR</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Champawat</td>
          <td>YOGESH CHANDRA PANDEY</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Dehradun</td>
          <td>TRILOK RAWAT	</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Dehradun</td>
          <td>DHANANJAY NAUTIYAL</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Haridwar</td>
          <td>SANDEEP ARORA</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Nanital</td>
          <td>RAJ SHEKHAR PANDEY</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Nanital</td>
          <td>Dr. RENU MARTOLIA</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Pauri garhwal</td>
          <td>ANUP SHARMA</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Pithoragarh</td>
          <td>BHAGIRATHI</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Rudraprayag</td>
          <td>SHAILI PRAJAPATI</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Rudraprayag</td>
          <td>KRISHNAKANT THAPLIYAL</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Tehri Garhwal</td>
          <td>SANGEETA GOYAL</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Tehri Garhwal</td>
          <td>MANOHAR SINGH PANWAR</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>16</td>
          <td>Usnagar</td>
          <td>SUNIL KUMAR</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>17</td>
          <td>Uttarkashi</td>
          <td>DEVANSH BHANDARI</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>18</td>
          <td>Uttarkashi</td>
          <td>AZAD KOHLI</td>
          <td>@fat</td>
        </tr>
        
      </tbody>
    </Table>

      
    </div>
  )
}

export default ContactUs
