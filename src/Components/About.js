import React from 'react'
import logo from '../assets/logo.jpg';

export default function About(props) {

    let imgstyle = {
        border: "2px solid white",
        borderRadius: "40px",
    }

    // const [myStyle, setmtStyle] = useState({
    //     color: '#1a1a1a',
    //     backgroundColor: 'white',
    // })

    // const [btnText,setbtnText] = useState("Enable Dark Mode")

    


    // const toggleStyle = () => {
    //     if (myStyle.color === '#1a1a1a') {
    //         setmtStyle({
    //             color: 'white',
    //             backgroundColor: '#1a1a1a',
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable Light Mode")

    //     }

    //     else {
    //         setmtStyle({
    //             color: '#1a1a1a',
    //             backgroundColor: 'white',
    //         })
    //         setbtnText("Enable Dark Mode")

    //     }
    // }


    return (
        <>
            <h1 className="text-center text-decoration-underline" style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>

            <div className='container d-flex justify-content-between my-5'style={{color:props.mode==='dark'?'white':'black',minHeight:"100vh"}}>
                
                <div style={{ width: '50%' }}>
                    <img src={logo} alt="about" style={imgstyle} />
                </div>

                <div  style={{ width: '50%'}}>
                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.
                </div>
            </div>

        </>
    )
}












            {/* <div className='container' style={myStyle}>
                <h2 className='my-3'>About Us</h2>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container my-3'>
                    <button type="button" onClick={toggleStyle} className="btn btn-secondary my-2 ">{btnText}</button>
                </div>
            </div> */}