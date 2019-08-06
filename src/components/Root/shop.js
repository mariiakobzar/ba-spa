import Handlebars from 'handlebars';
import './helpers/test';
import RootTemplate from './shop.hbs';
import Data from './products.json';

  var Root = () => {
    console.log(RootTemplate);
    let template = Handlebars.compile(RootTemplate);
    console.log(template(Data));
    return template(Data); 
  };

export default Root;