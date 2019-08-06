import Handlebars from 'handlebars';
import RootTemplate from './index.hbs';

  var Root = () => {
    let template = Handlebars.compile(RootTemplate);
    return template(); 
  };

export default Root;


