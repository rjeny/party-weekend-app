// import Styles from './Welcome.module.css';
import "./Welcome.css";

export default function Welcome() {
  return (
    <div id="container">
      <main>
        <section id="hero">
          <h1>
            Для начала откройте каталог{" "}
            <code>
              <pre>src/components/react/Welcome.tsx</pre>
            </code>{" "}
            в вашем проекте.
          </h1>
        </section>
      </main>
    </div>
  );
}