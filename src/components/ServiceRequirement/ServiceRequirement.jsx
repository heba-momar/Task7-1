import "./ServiceRequirement.css";

export default function ServiceRequirement({ number, title, pargraph }) {
  return (
    <section>
      <div className="HM-service-card">
        <span>{number}</span>
        <h4>{title}</h4>
        <p>{pargraph}</p>
      </div>
    </section>
  );
}