
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'




const FinancingInfo = () => {
  return (
    <div className="myFinancingInfo ">
        <Container fluid>
       
       <h1  >Financing Made Easy
</h1>
       <FontAwesomeIcon
icon={faPiggyBank}
size="8x"
className="icon fa-bounce"
style={{
 animationDuration: '2s',
 animationIterationCount: '1',
}}
/>
               <p>
               We promise to give you the most affordable dental care we can offer. We can also assist you in arranging a financing program tailored to your specific needs and budget.              
               </p>
               <p>
               We accept most traditional insurance plans, contact our office to verify acceptance of your plan. We also accept checks, cash or credit cards, and we offer a flexible payment plan. We, however, are not accepting Medicad at this time.


               </p>
       

   </Container>
      
      </div>
  );
};

export default FinancingInfo;