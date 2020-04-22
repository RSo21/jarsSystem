import React from "react";
import Carousel from 'react-bootstrap/Carousel';


const HomeCarousel  = () => {

    return(
          <Carousel className="home-carousel">
            <Carousel.Item className="carousel-item">
              <h3>“Successful people have fear, successful people have doubts, and successful people have worries. 
                They just don’t let these feelings stop them.” <span> - T. Harv Eker</span></h3>
              <p>Successful people have the same emotions as everyone else. The only difference is how they 
                react and don’t let these emotions decide their future. Don’t be afraid to feel the fear 
                and take massive action anyway. The more you pursue what is scary the less it will happen.</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>“If you are insecure, guess what? The rest of the world is too. Do not overestimate 
                the competition and underestimate yourself. You are better than you think.” <span> - T. Harv Eker</span></h3>
              <p>It’s important to never compare yourself to anyone but your former self. Everyone has a different 
                story, don’t compare your journey with theirs. Have confidence in yourself that you will succeed.</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>“The biggest obstacle to wealth is fear. People are afraid to think big, but if you think small, 
                you’ll only achieve small things.” <span> - T. Harv Eker</span></h3>
              <p>It takes no more effort to think and dream big than it does to think small. Don’t get caught up 
                in realistic or attainable goals. Create a goal or vision that will inspire and motivate you to become 
                someone you currently are not. Don’t be afraid to dream big!</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>“If you want to move to a new level in your life, you must break through your comfort zone 
                and practice doing things that are not comfortable.” <span> - T. Harv Eker</span></h3>
              <p>Human beings love their comfort zone. It’s why people stay in jobs they don’t like and settle 
                for mediocrity. But, if you can get in the habit of pushing yourself outside your comfort zone 
                on a consistent basis you will grow exponentially. If you want life to change chances are you have to change.</p>
            </Carousel.Item>
          </Carousel>
    )
}

export default HomeCarousel;