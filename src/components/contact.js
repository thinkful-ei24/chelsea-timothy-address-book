
import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.

export default function Contact(props){
   return (
        <section className='contact'>
          <img src={props.photo} className="class-photo" alt={`${props.name} user photo`}/>  
          <h2 className="class-name">{props.name}</h2>
          <div className='class-address'>{props.address}</div>
        </section>
    );
}