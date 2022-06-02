import { FaCheckCircle } from "react-icons/fa";

export default function Success() {
  return (
    <>
      <div className="home">
        <section className="description">
          <div className="success">
            <h2>
              <FaCheckCircle /> Thanks! The message has been sent.
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}
