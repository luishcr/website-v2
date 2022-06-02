import styles from "./Main.module.scss";

export default function Form() {
  return (
    <form
      name="contact-luishcr"
      method="POST"
      className={styles.Form}
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
    >
      <input type="hidden" name="form-name" value="contact-luishcr" />
      <p> Please fill the form.</p>
      <div className={styles.FormCamp}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          required
        />
      </div>

      <div className={styles.FormCamp}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          required
        />
      </div>

      <div className="formInputHidden">
        <label> Don't fill this out if you're human</label>
        <input type="text" name="bot-field" />
      </div>

      <div className={styles.FormCamp}>
        <label htmlFor="textarea"> Your message:</label>
        <textarea id="textarea" name="textarea" required></textarea>
      </div>

      <div className={styles.FormBtn}>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
