import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import IconNotes from '../icons/IconNotes.jsx';

export default class Logo extends Component {



render() {
  return(
    <a className="logo" href="/posts">
      <h3 className="heading"><span className="head">epoznamky.cz</span><span className="icon"><IconNotes fill="#2DB5CF" /></span></h3>
    </a>
  );
}

}
