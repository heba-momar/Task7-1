import "./ServiceRequirement.css";

export default function ServiceRequirement({ number, mtitle, mpargraph }) {
  return (
    <section>
      <div className="HM-service-card">
        <span>{number}</span>
        <h4>{mtitle}</h4>
        <p>{mpargraph}</p>
      </div>
    </section>
  );
}