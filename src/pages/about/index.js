import 'bootstrap/dist/css/bootstrap.min.css';
import { say } from 'cowsay';

// next.js way of 
import styles from '@/styles/Box.module.css'

export default function About() {

  let cowWords = say({ text: 'grazing in the browser' })
  console.log(cowWords);

  return <div className="container">
    <h1>About Me</h1>
    <div className="my-box"></div>
    <button className="btn btn-info">Click here</button>
    <pre className={styles.cowField}>
      {cowWords}
    </pre>
  </div>

}

