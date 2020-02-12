import React from 'react';
import './TitleItem.scss';

const TitleItem = (props) => {
  return (
    <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h2 className="p__title">{props.children}</h2>
          </div>
        </div>
  )
}
export default TitleItem;