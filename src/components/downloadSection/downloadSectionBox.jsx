import React from "react";
import { Button } from "reactstrap";
import FeatherIcon from 'feather-icons-react';


const DownloadSectionBox = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
            <p className="mb-4">{props.desc}</p>
           

            <div className="mt-4">
                <Button outline color="primary" style={{ borderRadius: "20px", width: "170px", height: "40px" }}
                >
                    Downlaod
                
                <i>
                <FeatherIcon icon="arrow-down" className="icons-sm ml-1" />
                    </i>
                      </Button>
            </div>
        </>
    );
}

export default DownloadSectionBox;















// class AskQuestionBox extends Component {
//     render() {
//         return (
//             <>
//                 <h3>{this.props.title}</h3>
//                 <p className="mb-4">{this.props.desc}</p>
//                 <Row>
//                     {
//                         this.props.renderQuestions.map((question, key) =>
//                             <Col sm={6} key={key} >
//                                 <p>
//                                     <i>
//                                         <FeatherIcon icon="check" className="icon-dual-primary mr-2" />
//                                     </i>{" "}
//                                     {question.title}
//                                 </p>
//                             </Col>
//                         )
//                     }
//                 </Row>

//                 <div className="mt-4">
//                     <Button outline color="primary" style={{ borderRadius: "20px", width: "170px", height: "40px" }}
//                     >
//                         View All Specialties
//                       </Button>
//                 </div>
//             </>
//         );
//     }
// }

// export default AskQuestionBox;