import React,{Component} from 'react';

class Footer extends Component{

    render(){
        return(
            <footer>
                <div className='footer'>
                    <h2 className='nombre'>El Menú</h2>

                    <div>
                        <p>123 calle, San Francisco, CA 10000</p>
                        <p>(555) 555-5555</p>
                    </div>

                    <div>
                        <p>Copyrigth © 2022</p>
                        <p>Todos los derechos reservados</p>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;