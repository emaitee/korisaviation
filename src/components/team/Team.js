import React from 'react';
import { UserCard } from 'react-ui-cards';
import Img from '../../images/card1.jpg';
import Img2 from '../../images/card2.jpg';
import Img3 from '../../images/card3.jpg';
import Img4 from '../../images/card4.jpg';

const Team = props => (
  <div>
    <h1 className="display-6 text-center" >KORIS TEAM</h1>

    <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={Img} alt="Card image cap"/>
    <div class="card-body info">
      <h4 class="card-title">Rober Downterun</h4>
      <p class="card-text">Lorem Ipsum</p>
      <div className="icons">
        <a href="#"><i className="icon-social-facebook"></i> </a>
        <a href="#"><i className="icon-social-twitter"></i> </a>
        <a href="#"><i className="icon-social-instagram"></i> </a>
      </div>
    </div>
   
  </div>
  <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    
    {/* <div className=" row">
      <section className="offset-md-3 col-md-6 text-center">
        Our multidisciplinary team includes former airline, corporate, military
        and airport executives, financial analysts and aviation experts offering
        highly specialized skills.
      </section></div>
    <div className="row" style={{margin:'0 2.5em'}}>
      <section className="col-md-4">
        <UserCard
          //   cardClass='float'
          header={Img2}
          avatar={Img}
          name="Hajja Kaltum "
          positionName="Software Engineering Manager"
        />
      </section>
      <section className="col-md-4">
        <UserCard
          //   cardClass='float'
          header={Img3}
          avatar={Img4}
          name="Shettima Mohammed"
          positionName="Director"
        />
      </section>
      <section className="col-md-4">
        <UserCard
          //   cardClass='float'
          header={Img2}
          avatar={Img}
          name="Frank Hepsfield"
          positionName="Software Engineering Manager"
          stats={[{ name: 'tweets', value: 5 }, { name: 'projects', value: 3 }]}
        />
      </section>
    </div> */}
  </div>
);

export default Team;
