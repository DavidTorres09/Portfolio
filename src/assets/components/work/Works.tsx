import React from "react";
import "./work.css";
import { projectsNav } from "./Data";
import Work1 from '../../../images-works/Work1.png';
import Work2 from '../../../images-works/Work2.png';
import Work3 from '../../../images-works/Work3.png';
import Work4 from '../../../images-works/Work4.png';
import Work5 from '../../../images-works/Work5.png';
import Work6 from '../../../images-works/Work6.png';


const Works = () => {
  return (

    <div className="work__container">

      <div className="work__card">
      <img src={Work1} alt="Mouse" className="work__img" />
          <div className="card-body">
            <h5 className="work__title">Day 1</h5>
            <p className="card-text">Expanding cards</p>
            <p className="card-text">Web Page</p>
            <a href="https://day-1-angel.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work__card">
      <img src={Work2} alt="Mouse" className="work__img" />
          <div className="card-body">
            <h5 className="work__title">Day 2</h5>
            <p className="card-text">Progress Steps</p>
            <p className="card-text">Web Pag</p>
            <a href="https://day-2-angel.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work__card">
      <img src={Work3} alt="Mouse" className="work__img" />
          <div className="card-body">
            <h5 className="work__title">Day 3</h5>
            <p className="card-text">Rotating Navigation</p>
            <p className="card-text">Web Pag</p>
            <a href="https://day-3-angel.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work__card">
      <img src={Work4} alt="Mouse" className="work__img" />
          <div className="card-body">
            <h5 className="work__title">Day 4</h5>
            <p className="card-text">Hidden Search Widget</p>
            <p className="card-text">Web Pag</p>
            <a href="https://day-4-angel.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work__card">
      <img src={Work5} alt="Mouse" className="work__img" />
          <div className="card-body">
            <h5 className="work__title">Day 5</h5>
            <p className="card-text">Blurry Loading</p>
            <p className="card-text">Web Pag</p>
            <a href="https://day-5-angel.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>

          
      </div> 

      <div className="work__card">
      <img src={Work6} alt="Mouse" className="work__img" />
          <div className="card-body">
            <h5 className="work__title">Day 6</h5>
            <p className="card-text">Scroll Animation</p>
            <p className="card-text">Categoría</p>
            <a href="https://day-6-angel.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

          
      </div>

  );
};
export default Works
