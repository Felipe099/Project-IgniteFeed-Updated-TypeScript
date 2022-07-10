import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/Felipe099.png',
            name: 'Felipe Torres',
            role: 'Dev Front-End',
        },

        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
            // <a href="#">#novoprojeto </a>
            // <a href="#">#nlw </a>
            // <a href="#">#rocketseat</a>
        ],

        publishedAt: new Date('2022-07-06 12:24:40'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
            // <a href="#">#novoprojeto </a>
            // <a href="#">#nlw </a>
            // <a href="#">#rocketseat</a>
        ],

        publishedAt: new Date('2022-07-07 14:21:40'),
    },
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return (
                            <Post 
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                            
                        );
                    })}
                </main>
            </div>
        </div>
    );
}
