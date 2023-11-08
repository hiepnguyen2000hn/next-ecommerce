import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/banner/banner1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Sale of the summer collection</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/banner/banner2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Make your house into a home</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/banner/banner3.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Make your house into a home</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/banner/banner4.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Make your house into a home</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Ship</h4>
                <p>Với đơn hàng từ 500k</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Giao hàng toàn quốc</h4>
                <p>Có mặt 63 tỉnh thành</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Bảo hành</h4>
                <p>Bảo hành 1 đổi 1 trong vòng 1 tuần</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro