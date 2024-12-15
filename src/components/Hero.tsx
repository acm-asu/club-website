import Statistics from "./Stats/Statistics";
import SocialMediaLinks from "./SocialMediaLinks";
import EventsPhotoCarousel from "./EventsPhotoCarousel";
//import AnimatedBackGround from "./AnimatedBackGround";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <main className="hero">
        <section className="hero-container">
          <summary className="left-hero">
            <h1 className="hero-large-text">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("The ACM is now at ASU")
                    .changeDelay(5)
                    .pauseFor(1500)
                    .changeDelay(5) // Adjust speed for delete effect
                    .start();
                }}
              />
            </h1>
            <p className="hero-small-text max-md:hidden">
              With over 100,000 members worldwide, the ACM is the world's largest computing society, promoting
              knowledge and interest in the science, design, development, management, and applications of computing.
              <br/>
              <br/>
              ACM at ASU achieves this by
              fostering collaboration and community between students and the ACM through opportunities for
              networking, learning, mentoring and knowledge-sharing.
            </p>
          </summary>
          <EventsPhotoCarousel />
        </section>
      </main>
    </>
  );
}

export default Hero;

// TODO: Possibly add down arrow button for scrolling to next section (#about)