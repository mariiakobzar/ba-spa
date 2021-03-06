import Handlebars from 'handlebars';
import RootTemplate from './about.hbs';

  var Root = () => {
    let template = Handlebars.compile(RootTemplate);
    return template(); 
  };

export default Root;