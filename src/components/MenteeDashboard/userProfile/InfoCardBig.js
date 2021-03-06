import React from 'react';
import { useState } from 'react';
import InfoCardBigStyled from './InfoCardBigStyled';

function InfoCardBig({ header, data }) {
  const [showEdit, setshowEdit] = useState(null);

  return (
    <InfoCardBigStyled>
      <div className="list__container">
        <div className="list_header">
          <p>{header}</p>
          <i class="fas fa-plus"></i>
        </div>
        {data.map((item, idx) => (
          <div
            className="list-item"
            onMouseEnter={e =>
              setshowEdit(Number(e.target.getAttribute('data-key')))
            }
            onMouseLeave={() => setshowEdit(null)}
            key={idx}
            data-key={idx}
          >
            <div className="list-item-name">
              {item.icon}
              <span>{item.title}</span>
            </div>
            <div
              className={`edit__item $ ${
                showEdit === idx ? 'd-block' : 'd-none'
              }`}
            >
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
        ))}
      </div>
    </InfoCardBigStyled>
  );
}

export default InfoCardBig;
