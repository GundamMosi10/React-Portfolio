import React from 'react';
import '../styles/socialmedia.css';

export default function Contact() {
  return (
    <div>
      <section className="card">
                    <div className="container">
                      <a href="https://www.instagram.com/colinmosi/"></a><button className="btn"><i className="fab fa-instagram" id="instagram"></i></button>
                      <i className="fab fa-github-square github" id="github"></i>
                      <i className="fab fa-twitter" id="twitter"></i>
                      <i className="fab fa-linkedin" id="linkedin"></i>
                    </div>
      </section>
    </div>
  );
}

