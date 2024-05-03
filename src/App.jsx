import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rubens Tadeu"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam odio nulla reprehenderit consectetur deleniti sit provident iure assumenda repellat veritatis delectus iste aliquid modi ipsa at impedit distinctio, similique cum!"
          />
          <Post 
            author="Lucas Tadeu"
            content="Nova publicação"
          />
        </main>
      </div>
    </div>
  )
}

export default App

