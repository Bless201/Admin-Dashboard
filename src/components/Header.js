import Image from  '../image/logo.6ba0579820bd9bee66d8 (1).png';


const Header = () => {
    return (
        <header className='header'>
            <div className='left-header'>
                <img src={Image} alt='' style={{width: "100%"}}/>
            </div>

            <div className='right-header'>
                <input placeholder="Admission No, Email or Phone" />
                <div className="icons">
                    <p className="fa fa-search" aria-hidden="true"></p>
                    {/* <p className='icon'>|</p> */}
                    <p className="fa fa-bell-o" aria-hidden="true"></p>
                </div>
            </div>
        </header>
    );
  };
  
  export default Header;