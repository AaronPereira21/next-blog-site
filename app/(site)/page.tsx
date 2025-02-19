import Link from 'next/link'
import { reader } from '../reader'

export default async function Homepage() {
  const posts = await reader.collections.posts.all()

  return (
    <div>
      <h1>Blog Site ⚡️</h1>
      <p>Share your ideas with the World.</p>
      <p>
        Click <a href="/keystatic">here </a>to visit the Admin UI, or the link below to view a post
        in the collection.
      </p>
      <h2>Posts Written By Users</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
