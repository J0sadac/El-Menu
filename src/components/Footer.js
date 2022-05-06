import React,{Component} from 'react';

class Footer extends Component{

    render(){
        return(
            <footer>
                <h2 className='nombre'>El Menú</h2>

                <div>
                    <addres>123 calle, San Francisco, CA 10000</addres>
                    <p>(555) 555-5555</p>
                </div>

                <div>
                    <p>Copyrigth © 2022</p>
                    <p>Todos los derechos reservados</p>
                </div>

            </footer>
        );
    };
};

export default Footer;