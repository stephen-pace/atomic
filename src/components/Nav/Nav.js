import React, {Component} from 'react';
import justAtomic from './../../images/just atomic.png';
import justLogo from './../../images/just logo.png';

class Nav extends Component {


    changeAlpineBackground=(color)=>{
        document.getElementById('navbar-alpine-special').style.background = color
    }

    render(){
        return(
        <div className='navbar'> 
            <div className='navbar-left'>
                <img className='nav-logo' src={justLogo} alt="logo"/>
                <i className="fas fa-bars"></i>
                <img className='nav-atomic' src={justAtomic} alt="atomic"/>
            </div>
            {/* <div className='navbar-right'> */}
                
            <div className='navbar-button-men' onMouseOver={()=>this.changeAlpineBackground('gray')}>Men
                <div className='navbar-dropdown'>
                    <div className='navbar-drop-content'>
                        <div className='navbar-drop-alpine' id='navbar-alpine-special'>
                            <div className='navbar-alpine'>
                                Alpine
                            </div>
                            <div className='navbar-drop-alpine-content'>
                                <li>Skis</li>
                                <li>Ski Bindings</li>
                                <li>Ski Boots</li>
                                <li>Ski Helmets</li>
                                <li>Ski Goggles</li>
                                <li>Ski Poles</li>
                                <li>Ski Protection</li>
                                <li>Ski Bags & Packs</li>
                                <li>Apparel</li>
                            </div>
                        </div>
                        <div className='navbar-drop-touring' onMouseOver={()=>this.changeAlpineBackground('green')}>
                            <div className='navbar-touring'>
                                Touring
                            </div>
                            <div className='navbar-drop-touring-content'>
                                <li>Skis</li>
                                <li>Ski Bindings</li>
                                <li>Ski Boots</li>
                                <li>Ski Helmets</li>
                                <li>Ski Goggles</li>
                                <li>Ski Poles</li>
                                <li>Ski Protection</li>
                                <li>Ski Bags & Packs</li>
                                <li>Apparel</li>
                            </div>
                        </div>
                        <div className='navbar-drop-nordic'>
                            <div className='navbar-nordic'>
                                Nordic
                            </div>
                            <div className='navbar-drop-nordic-content'>
                                <li>Skis</li>
                                <li>Ski Bindings</li>
                                <li>Ski Boots</li>
                                <li>Ski Helmets</li>
                                <li>Ski Goggles</li>
                                <li>Ski Poles</li>
                                <li>Ski Protection</li>
                                <li>Ski Bags & Packs</li>
                                <li>Apparel</li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
               

            <div className='navbar-button'>Women</div>
            <div className='navbar-button'>Kids</div>
            <div className='navbar-button'>Athletes</div>
            <div className='navbar-button'>Atomic World</div>
        
            <i className="fas fa-search"></i>
            {/* </div> */}
            
        </div>
        )
    }
}

export default Nav;