import footerCSS from "/footer/footer.css";

export default function footer() {
  return (
    <div className="container-fluid m-0 p-5 footer-container" style={footerCSS}>
      <div className="container-of-socials d-flex mx-auto">
        <img
          src="https://imj31us4am50.github.io/SpringStudy-media/FACEBOOK.png"
          className="socials-icon m-2"
        />
        <img
          src="https://imj31us4am50.github.io/SpringStudy-media/INSTAGRAM.png"
          className="socials-icon m-2"
        />
        <img
          src="https://imj31us4am50.github.io/SpringStudy-media/TWITTER.png"
          className="socials-icon m-2"
        />
      </div>
      <div className="copyright text-white mx-auto text-center mt-3">
        Copyright ©2022 Spring Study.
      </div>
    </div>
  );
}
