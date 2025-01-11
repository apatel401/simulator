// Code: Entry point for the Microscope Simulator
import { createRoot } from 'react-dom/client'
import MainContainer from './components/MainContainer';
import './index.scss'

// Find all DOM containers
document.querySelectorAll('.microscope-simulator-container')
  .forEach((domContainer, index) => {
    // Read the config from a data-* attribute.
    const _config = (domContainer as HTMLElement).dataset.config;
    let _tfc = (_config !== undefined && _config !== '') ? (<MainContainer id={index} config={_config} />) : (<div className='warn'>error: microscope-simulator- missing config</div >);
    createRoot(domContainer).render(_tfc)
  });