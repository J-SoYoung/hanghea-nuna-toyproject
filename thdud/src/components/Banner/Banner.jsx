import { Carousel } from "antd";

function Banner() {
  return (
    <Carousel autoplay>
      <div>
        <img src="/image/banner1.jpg" />
      </div>
      <div>
        <img src="/image/banner2.jpg" />
      </div>
      <div>
        <img src="/image/banner3.jpg" />
      </div>
    </Carousel>
  );
}

export default Banner;
