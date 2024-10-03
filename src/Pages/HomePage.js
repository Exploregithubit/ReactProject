import React from 'react';
import './HomePage.css';
import myImage from '../assets/images/logo1.jpeg'; // Adjust the path as necessary
import mylogo from '../assets/images/logo2.jpeg';
import logo1 from '../assets/images/logo1.jpeg';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import imgg11 from '../assets/images/imgg11.jfif';


import imgg3 from '../assets/images/imgg3.jpg';
import imgg4 from '../assets/images/imgg4.jfif';
import cd from '../assets/images/cd.jpg';
import imgg10 from '../assets/images/imgg10.jfif';
import Container from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';








function HomePage() {
  
  const [modalShowFirst, setModalShowFirst] = React.useState(false);
  const [modalShowThird, setModalShowThird] = React.useState(false);
  const [modalShowFourth, setModalShowFourth] = React.useState(false);
  const [ModalShowFifth, setModalShowFifth] = React.useState(false);
  const [ModalShowRegister, setModalShowRegister] = React.useState(false);
  const [ModalShowForgetPassword, setModalShowForgetPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // If authentication is successful:
    navigate('/dashboard');
  };


  


  return (
    <Container fluid>
      <Row  className='header'>
        <Col md={4} className='mt-5' >
          <img src={myImage} className=" logo1"  alt="Logo 1" />
        </Col>
        <Col md={4} className='mt-3'>
          <h3 className='main-heading'>महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड</h3>
          <h2 className='mt-3 heading-1'>नंदा गौरा योजना</h2>
        </Col>
       
        <Col md={4} className='mt-5' >
          <img src={mylogo} className="  logo2"  alt="Logo 2" />
        </Col>
       
        <Row>
         
        <Col>
       
          <div className='Form-container'>
            <p2><marquee><span>Important:-</span>नंदा गौरा योजना अंतर्गत वित्तीय वर्ष 2024-25 हेतु नए आवेदन दिनांक :30-Nov-2024 तक ही भरा जा सकता है। !!!</marquee></p2>
          </div>
        </Col>
        </Row>
      </Row>
      

      <Row>
        <Col sm={8}>
        <Row>
          <Col sm={4}> <Card className="mt-3 card-control " >
          <h5 className='card-title'>नंदा गौरा आवेदन पत्र</h5>
          <Card.Img variant="top" className="card-img"   src={imgg11} />
                  <Card.Body>
                    
                    <Button variant="primary" onClick={() => setModalShowFirst(true)}>
                Read more
              </Button>
              <Button variant="secondary" className='card-btn'><FaDownload/>Download</Button>
              <Modal
                show={modalShowFirst}
                onHide={() => setModalShowFirst(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header className='modal-head' closeButton id="close-btn">
                  <Modal.Title id="contained-modal-title-vcenter">
                    <h5>नंदा गौरा आवेदन पत्र ऑनलाइन भरने से पूर्व निम्न निर्देशों का भली-भाँति अध्ययन कर लें:</h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                  <p6>
                    <ol className='modal-list'>
                      <li>आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें, अधूरी एवं गलत जानकारी भरने पर आवेदन निरस्त कर दिया जाएगा।</li>
                      <li>यह योजना केवल उत्तराखण्ड राज्य के मूल/स्थायी बालिकाओं हेतु ही मान्य है ।</li>
                      <li>एक परिवार की किन्हीं भी दो से अधिक बालिकाओं(जीवित बालिकाओं) को नंदा गौरा योजना से लाभान्वित नहीं किया जाएगा।</li>
                      <li>एक कन्या/बालिका के लिए एक चरण के लिए एक से अधिक बार<span className='modal-txt'>योजना के लाभ हेतु आवेदन करने पर आवेदन पत्र निरस्त कर दिया जाएगा।</span> </li>
                      <li>इस योजना का लाभ केवल कन्या जन्म(प्रथम चरण ) पर एवं बालिका के इंटर (कक्षा-12) उत्तीर्ण (द्वितीय चरण) करने पर ही देय है।</li>
                      <li>कन्या के जन्म पर लाभ हेतु कन्या-शिशु जन्म के 06 माह के भीतर आवेदन करना अनिवार्य है। 06 माह के उपरांत आवेदन करने पर आवेदन स्वीकार नहीं किया जाएगा।</li>
                      <li>द्वितीय चरण के लाभ हेतु प्रत्येक वित्तीय-वर्ष में आवेदन करने की अंतिम तिथि 30 नवबंर निर्धारित की गयी हैं। इस तिथि के उपरांत आवेदन करने पर आवेदन स्वीकार नहीं किया जाएगा।</li>
                      <li>प्रत्येक चरण हेतु आवश्यक प्रमाण पत्र नंदा गौरा योजना हेतु ऑनलाइन आवेदन करने के समय अपलोड करने आवश्यक है।</li>
                      <li>प्रत्येक अपलोड किए जाने वाले प्रमाण पत्र का साइज <span className='modal-txt'>200 KB से अधिक का न हो व स्पष्ट रूप से पठनीय हो। प्रमाण पत्र अपठनीय होने पर आवेदन निरस्त कर दिया जाएगा जिसकी पूर्ण जिम्मेदारी आवेदनकर्ता की होगी।</span></li>
                      <li>कन्या के जन्म पर आवेदन हेतु माता / पिता / संरक्षक एवं कन्या शिशु के संयुक्त खाता संख्या एवं 12वी कक्षा उत्तीर्ण हेतु छात्रा/लाभार्थी का बैंक खाता विवरण सही से भरें। बैंक खाता विवरण भरते समय यह सुनिश्चित कर लें कि खाता आधार से लिंक हो साथ ही ध्यान दें कि खाता जन-धन का न हो।</li>
                      <li>नंदा गौरा योजना का लाभ प्राप्त करने के लिए आवेदनकर्ता यह सुनिश्चित कर ले कि उनके द्वारा उपलब्ध करवाया गया बैंक खाता सक्रिय है।</li>
                      <li>यह योजना बजट की प्रत्याशा में पहले आओ-पहले पाओ पर आधारित है।</li>
                      <li>यह योजना पूरी तरह ऑनलाइन कर दी गयी है। किसी भी दशा में ऑफलाइन आवेदन स्वीकार नहीं किए जाएंगे।</li>
                      <li>यह योजना समय-समय पर जारी शासनादेशो के अनुरूप संचालित होगी।</li>
                    </ol>
                  </p6>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalShowFirst(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              
             </Card.Body>
                </Card></Col>
          <Col sm={4}> <Card className="mt-3 card-control">
            <h5 className='card-title'> नंदा गौरा योजना पूर्ण विज्ञप्ति:-</h5>
          <Card.Img variant="top" className="card-img" src={imgg3} />
                  <Card.Body>
                  

                    <Button variant="primary">Read more</Button>
                    <Button variant="secondary" className='card-btn'><FaDownload/>Download</Button>
                   
                  </Card.Body>
                  
                </Card></Col>
          <Col sm={4}> <Card className="mt-3 card-control">
            <h5 className='card-title'>कन्या के जन्म पर
            </h5>
                  <Card.Img variant="top" className="card-img"  src={cd} />
                  <Card.Body>
                   

 <Button variant="primary" onClick={() => setModalShowThird(true)}>
                Read more
              </Button>
              <Button variant="secondary" className='card-btn'><FaDownload/>Download</Button>
              <Modal
                show={modalShowThird}
                onHide={() => setModalShowThird(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header  className='modal-head' closeButton>
                  <Modal.Title id="contained-modal-title-vcenter" >
                    कन्या के जन्म पर आवश्यक दस्तावेज
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                  <p6>
                    <ol className='modal-list'>
                      <li>कन्या शिशु की नवीनतम पासपोर्ट साइज फोटो</li>
                      <li>माता / पिता / अभिभावक के हस्ताक्षर</li>
                      <li>आय प्रमाण पत्र</li>
                      <li>जन्म पंजीकरण का प्रमाण पत्र</li>
                      <li>माता और पिता / अभिभावक का आधार कार्ड</li>
                      <li>राशन कार्ड की प्रति</li>
                      <li>परिवार रजिस्टर की नकल या सभासद/पार्षद द्वारा दिया गया प्रमाण पत्र</li>
                      <li>नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर या किराया समझौते के कागजात <span className='modal-txt' >ना उपलब्ध होने की स्तिथि में गृह कर ना देने का ग्राम प्रधान/पार्षद द्वारा प्रदत प्रमाण पत्र</span></li>
                      <li>माता और पिता / अभिभावक का पैन कार्ड</li>
                      <li>आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र। </li>
                      <li>मातृशिशु प्रतिरक्षण / एम०सी० पी० (टीकाकरण) कार्ड
                      </li>
                      <li>परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति
                      </li>
                      <li>सामाजिक आर्थिक और जाति जनगणना (SECC) में परिवार की स्थिति के आंकलन की प्रति (यदि उपलबध है)</li>
                      <li>शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही अनुमन्य है इसलिए आवेदित <span className='modal-txt'>बालिका के परिवार की अन्य बालिकाओं को पूर्व में कन्या के जन्म पर योजना का लाभ दिये जाने / न दिये जाने विषयक शपथ –पत्र में निम्न बिंदु शामिल होंगे :-</span>
                      </li>
                      <li>मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है</li>
                      <li>मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी,समस्त सूचनाएं सही –सही दी गयी है</li>
                      <li>मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है
                      </li>
                      <li>मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष के बैंक स्टेटमेंट सहित दे दिया गया है
                      </li>
                      <li>अन्य आवश्यक अभिलेख:-</li>
                      <li>परिवार के विगत 03 बार के बिजली के बिलों की प्रति तथा विगत 01 बार के पानी के बिल की प्रति कनेक्शन न होने की स्तिथि में शपथ पत्र में आवश्यक रूप से उल्लेख करे।</li>
                      <li>कोई अन्य दस्तावेज़ की प्रतिलिपि</li>
                    </ol>
                  </p6>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalShowThird(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
                  </Card.Body>
                </Card></Col></Row>
          <Row>
            <Col sm={6} > <Card className=" mt-3 card-control" >
              <h5 className='card-title'>बालिका के इंटर उत्तीर्ण करने पर
              </h5>
                  <Card.Img variant="top"  className="card-img"src={imgg4} />
                  <Card.Body>
                   

                    <Button variant="primary" onClick={() => setModalShowFourth(true)}>
                Read more
              </Button>
              <Button variant="secondary" className='card-btn'><FaDownload/>Download</Button>
              <Modal
                show={modalShowFourth}
                onHide={() => setModalShowFourth(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header className='modal-head' closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                  बालिका के इंटर उत्तीर्ण करने पर

                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                  <p>
                    <ol className='modal-list'>
                      <li>छात्रा की नवीनतम पासपोर्ट साइज फोटो ।</li>
                      <li>छात्रा के हस्ताक्षर</li>
                      <li>माता / पिता/अभिभावक के हस्ताक्षर</li>
                      <li>हाईस्कूल का प्रमाण-पत्र</li>
                      <li>कक्षा 12वीं उत्तीर्ण का अंक पत्र एवं प्रमाण पत्र।</li>

                      OR
                      राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति
                      <li>छात्रा एवं माता और पिता/अभिभावक का आधार कार्ड</li>
                      <li>परिवार रजिस्टर की नकल या सभासद/पार्षद द्वारा दिया गया प्रमाण पत्र</li>
                      <li>नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर या किराया समझौते के कागजात<span className='modal-txt' >ना उपलब्ध होने की स्तिथि में गृह कर ना देने का ग्राम प्रधान/पार्षद द्वारा प्रदत प्रमाण पत्र</span> </li>
                      <li>सामाजिक आर्थिक और जाति जनगणना में परिवार की स्थिति के आंकलन की प्रति (यदि उपलबध है)</li>
                      <li>परिवार के विगत 03 बार के बिजली के बिलों की प्रति तथा विगत 01 बार के पानी के बिल की प्रति <span className='modal-txt' >कनेक्शन न होने की स्तिथि में शपथ पत्र में आवश्यक रूप से उल्लेख करे।</span></li>
                      <li>शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही अनुमन्य है इसलिए आवेदित बालिका के परिवार की अन्य बालिकाओं को पूर्व में 12वीं कक्षा पूरी करने पर योजना का लाभ दिये जाने / न दिये जाने विषयक शपथ –पत्र में निम्न बिंदु आवश्यक रूप से शामिल होंगे :-</li>
                      <li>मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है, मेरी यह पुत्री अविवाहित है।</li>
                      <li>मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी समस्त सूचनाएं सही –सहीदी गयी है</li>
                      <li>मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है</li>
                      <li>मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष के बैंक स्टेटमेंट सहित दे दिया गया है</li>
                      <li>लाभार्थी बालिका के बैंक पासबुक की छाया प्रति</li>
                      <li>परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति
                      </li>
                      <li>प्रधानाचार्य द्वारा कक्षा 12 उत्तीर्ण का निर्गत प्रमाण पत्र केवल संस्थागत छात्रा के लिए </li>
                      <li>राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति</li>
                      <li>निजी विद्यालयों की छात्राओं हेतु प्रमाण पत्र (RTE के अंतर्गत पंजीकृत)</li>
                      <li>आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र।</li>
                    </ol>
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalShowThird(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
                 
                   
                    
                  </Card.Body>
                </Card></Col>
          <Col sm={6}> 
          
          <Card className="mt-3 card-control " >
            <h5 className='card-title'>नारी निकेतन से  बालिका के इंटर उत्तीर्ण करने पर</h5>
          
          <Card.Img variant="top" className="card-img"  src={imgg10} />
                  <Card.Body>
                   

                  <Button variant="primary" onClick={() => setModalShowFifth(true)}>
                Read more
              </Button>
              <Button variant="secondary" className='card-btn'><FaDownload/>Download</Button>
<Modal 
                show={ModalShowFifth}
                onHide={() => setModalShowFifth(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header  className='modal-head' closeButton style={{ Color: 'white' }}> 
                  <Modal.Title id="contained-modal-title-vcenter">
                  नारी निकेतन, अनाथ आश्रम में पलने वाली बालिका के इंटर उत्तीर्ण करने पर

                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                  <p>
                    <ol className='modal-list'>
                      <span>उत्तराखण्ड राज्य में स्थापित बालिका निकेतन, नारी निकेतन, अनाथ आश्रम, उत्तराखण्ड राज्य सरकार द्वारा सहायतित अन्य गृहों में पलने वाली</span>
                      <li>छात्रा के हस्ताक्षर </li>
                      <li>हाईस्कूल का प्रमाण-पत्र।</li>
                      <li>आय प्रमाण पत्र</li>
                      <li>कक्षा 12वीं उत्तीर्ण का अंक पत्र एवं प्रमाण पत्र</li>

                      OR
                      <ul>राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति</ul>
                      <li>छात्रा का आधार कार्ड</li>
                      <li>छात्रा का पैन कार्ड</li>
                      <li>अविवाहित होने का प्रमाण पत्र (स्वयं द्वारा प्रदत्त )
                      </li>
                      <li>लाभार्थी बालिका के बैंक पासबुक की छाया प्रति</li>
                      <li>प्रधानाचार्य द्वारा कक्षा 12 उत्तीर्ण का निर्गत प्रमाण पत्र <span className='modal-txt' >केवल संस्थागत छात्रा के लिए</span> </li>
                      OR
                      <ul>राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति</ul>
                      <li>उच्च शिक्षा में दाखिले के पूर्ण अभिलेखों की प्रति
                      </li>
                      <li>संस्था की अधीक्षिका द्वारा जारी प्रमाण-पत्र</li>
                    </ol>
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalShowFifth(false)}>Close</Button>
                </Modal.Footer>
              </Modal>

                  </Card.Body>
                </Card>
                </Col>
          </Row>
          </Col>     
         <Col sm={4}  >
         <Card className='mt-3'>
          <p className='blinking-txt'>  आवेदन करने हेतु पोर्टल खुला हुआ है। </p>
          
          <h5 class="login-head"> आवेदक/उपयोगकर्ता लॉगिन फॉर्म</h5>
      
      <Card.Body className='card-bg'>
       
        
        <Form className=''>
          <h4 className='form-heading'>साइन इन करे </h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-control'>पंजीकृत मोबाइल नंबर</Form.Label>
        <Form.Control  type="email" placeholder="Registered Mobile Number" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-control'>आपका पासवर्ड</Form.Label>
        <Form.Control type="password" placeholder="Your Password" />
      </Form.Group>

      <Button variant="primary" className='Sign-btn' type="submit">
            साइन इन
          </Button>
          {/* <a href="../Pages/Dashboard.js" variant="primary" className='Sign-btn' type="submit">
            साइन इन
          </a>
       */}
     
    </Form> 

        <Row className='mt-3'>
          <Col md={4} sm={12}>
          <a className='login-tutorial'><FaDownload/>Login-Tutorial</a>
          </Col>
          <Col md={8} sm={12}>
          <p>      <a className="register"onClick={() => setModalShowRegister(true)}>
        नए आवेदक/उपयोगकर्ता अभी पंजीकरण करें
</a></p>
<p><a className="forgetPassword "onClick={() => setModalShowForgetPassword(true)}>
              पासवर्ड भूल गए है ? </a></p>

          </Col>
        </Row>
  

              
              
            
                  </Card.Body>
                </Card>
            <Modal
                show={ModalShowRegister}
                onHide={() => setModalShowRegister(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header className='modal-title' closeButton>
                  <Modal.Title id="contained-modal-title-vcenter"className='primary'>
                  नए आवेदक/उपयोगकर्ता पंजीकरण जानकारी

                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form className=''>
          
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>पंजीकरण फॉर्म पर आगे बढ़ने के लिए अपना वैध मोबाइल नंबर दर्ज करें।

</Form.Label>
        <Form.Control type="email" placeholder="Registered Mobile Number" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>अपने जिले का नाम चुनें</Form.Label>
        <Form.Control type="password" placeholder="Your Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
      जानकारी दर्ज करे
      </Button>

     
    </Form> 

    </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalShowRegister(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              
                <Modal show={ModalShowForgetPassword} onHide={setModalShowForgetPassword}>
        <Modal.Header className='modal-title' closeButton>
          <Modal.Title   ><h5>पासवर्ड भूल जाने की स्थिति में पासवर्ड रीसेट फॉर्म</h5> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>पंजीकृत मोबाइल नंबर दर्ज करें।</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Registered Mobile Number"
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" className="btn-theme" onClick={setModalShowForgetPassword}>
          जानकारी दर्ज करे
          </Button>
        </Modal.Footer>
      </Modal>
         
     </Col>
     
        </Row>

      
        
 </Container>
 
  );
}

export default HomePage;
