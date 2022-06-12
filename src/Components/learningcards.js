import 'bootstrap/dist/css/bootstrap.min.css';
import ill from "../assets/pic1.jpg"
import nll from "../assets/pic2.jpg"
import dll from "../assets/pic3.png"
import pic from "../assets/L1.jpg"
import './learningcards.css'
function Learning() {
    return (
        <div className='ps-3'>
            <div className='row d-flex'>

                <div className='col-lg-3 col-md-6 col-sm-10'>
                    <div >
                        <div className="card shadow p-3 mb-5 bg-white rounded" >
                            <img src={ill} className="d-block w-100  " height='300px' width='1000px' alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> Online Training </h5>
                                <p className="card-text"> A learning system based on formalised teaching but with the help of electronic resources is known as E-learning. While teaching can be based in or out of the classrooms, the use of computers and the Internet forms the major component of E-learning.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-10 '>
                    <div className="card shadow p-3 mb-5 bg-white rounded" >
                        <img src={nll} className="d-block w-100  " height='300px' width='50px' alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Online Educational</h5>
                            <p className="card-text">Online education provides students with opportunities to network with peers around the world. This often leads to collaboration on projects, which leads to gaining exposure to different cultures.</p>

                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-10'>
                    <div className="card shadow p-3 mb-5 bg-white rounded" >
                        <img src={dll} className="d-block w-100  " height='300px' width='50px' alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">E-learning</h5>
                            <p className="card-text">A learning system based on formalised teaching but with the help of electronic resources is known as E-learning. While teaching can be based in or out of the classrooms, the use of computers and the Internet forms the major component of E-learning
                            </p>

                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-10'>
                    <div className="card shadow p-3 mb-5 bg-white rounded" >
                        <img src={pic} className="d-block w-100  " height='300px' width='50px' alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">E-learning benefits </h5>
                            <p className="card-text"> Students can interact with their peers from all around the world through group discussions and private chats; The studying material can be accessed unlimited number of times.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Learning;