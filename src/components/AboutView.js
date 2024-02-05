import Hero from "./Hero";
const AboutView = () => {
  return (
    <div>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum magni iusto, tempore nisi aspernatur exercitationem architecto labore quia consequatur minus vero ratione eveniet laborum iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
