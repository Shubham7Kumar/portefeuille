import "./SectionHeading.css";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="section-heading">

      <p>{subtitle}</p>

      <h2>{title}</h2>

    </div>
  );
};

export default SectionHeading;