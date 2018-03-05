import React,{Component} from 'react';

export default class MenusList extends Component {
  render() {
    return (
      <section className="menus-list">
        <h2 className="heading--primary">Menu</h2>
        <div className="bg--food">
          <div className="pizza"></div>
          <div className="macaroni"></div>
          <div className="pasta"></div>
        </div>
        <div className="menus__list">
          <h3 className="heading--faded">food & apetizers</h3>
          <div className="entree">
            <div className="col-left">
              <ul>
                <li>
                  <div className="food--text">
                    <h4 className="food--heading">pizza mexicana</h4>
                    <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                  </div>
                  <div className="food--price">
                    <span className="price--cursive price">$19.90</span>
                  </div>
                </li><li>
                  <div className="food--text">
                    <h4 className="food--heading">pizza quatro stagioni</h4>
                    <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                  </div>
                  <div className="food--price">
                    <span className="price--cursive price">$19.90</span>
                  </div>
                </li><li>
                  <div className="food--text">
                    <h4 className="food--heading">pizza quatro formagi</h4>
                    <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                  </div>
                  <div className="food--price">
                    <span className="price--cursive price">$19.90</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-right">
              <ul>
                <li>
                  <div className="food--text">
                    <h4 className="food--heading">pizza carnivora</h4>
                    <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                  </div>
                  <div className="food--price">
                    <span className="price--cursive price">$19.90</span>
                  </div>
                </li><li>
                  <div className="food--text">
                    <h4 className="food--heading">lasagna</h4>
                    <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                  </div>
                  <div className="food--price">
                    <span className="price--cursive price">$19.90</span>
                  </div>
                </li><li>
                  <div className="food--text">
                    <h4 className="food--heading">lasagna napolitana</h4>
                    <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                  </div>
                  <div className="food--price">
                    <span className="price--cursive price">$19.90</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="deserts">
            <h3 className="heading--faded">deserts</h3>
            <div className="entree">
              <div className="col-left">
                <ul>
                  <li>
                    <div className="food--text">
                      <h4 className="food--heading">tiramisu</h4>
                      <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                    </div>
                    <div className="food--price">
                      <span className="price--cursive price">$19.90</span>
                    </div>
                  </li><li>
                    <div className="food--text">
                      <h4 className="food--heading">pizzelles</h4>
                      <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                    </div>
                    <div className="food--price">
                      <span className="price--cursive price">$19.90</span>
                    </div>
                  </li><li>
                    <div className="food--text">
                      <h4 className="food--heading">silican ricotto</h4>
                      <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                    </div>
                    <div className="food--price">
                      <span className="price--cursive price">$19.90</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-right">
                <ul>
                  <li>
                    <div className="food--text">
                      <h4 className="food--heading">canoli</h4>
                      <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                    </div>
                    <div className="food--price">
                      <span className="price--cursive price">$19.90</span>
                    </div>
                  </li><li>
                    <div className="food--text">
                      <h4 className="food--heading">double choco biscotti</h4>
                      <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
                    </div>
                    <div className="food--price">
                      <span className="price--cursive price">$19.90</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
