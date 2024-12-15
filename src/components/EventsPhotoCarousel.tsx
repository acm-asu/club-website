import placeholder from "../assets/logo-placeholder.png";

function EventsPhotoCarousel() {
  return (
    <div className="max-md:hidden mx-auto">
      <img src={placeholder} width={400} alt="place holder" />
    </div>
  );
}

export default EventsPhotoCarousel;

// TODO: Replace place holder with, either, linked images and text, or SIG event calendar
//  (if latter, ignore #about comment)