import sketch1 from '../assets/logo/sketch1.jpeg'
import sketch2 from '../assets/logo/sketch2.jpeg'
import Logo from '../assets/logo/tempiot.jpg'
import Qr_code from '../assets/logo/Qr.png'

const Login = () => {
    return (
        <>
            <div className='content'>
                <div className='digital_scan'>
                    <div className="TempoIot">TempoIoT</div>
                    <div className="ds">digital Simplified</div>
                    <img src={Qr_code} style={{ height: '100px', width: '100px' }} alt="Qr" />
                    <div className="para">It's beginning of machines taking over the world</div>
                    <div className="powered_by">
                        Powered by <span className="Quantanics">Quantanics</span>
                    </div>
                </div>
                <div className='login_inputs'>
                    <div className="all_inputs">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <input type="text" placeholder='Username' className='login_inputs_individual' />
                        <input type="password" placeholder='Password' className='login_inputs_individual' />
                        <div className="forget">
                            Forget Password
                        </div>
                        <div className="login_btn_div">
                            <input type="submit" className='login_btn' value={"Login"}/>
                        </div>
                    </div>
                </div>

            </div>
            <div className='sketch_images'>
                <img src={sketch1} alt="sketch1" className='sketch1' />
                <img src={sketch2} alt="sketch2" className='sketch2' />
            </div>
        </>
    )
}
export default Login;