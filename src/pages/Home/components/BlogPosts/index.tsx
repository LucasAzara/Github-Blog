// CSS
import { Publications, SearchBar, Blog, Posts } from './styles'
// React Markdown
import ReactMarkdown from 'react-markdown'
// Date
import differenceInDays from 'date-fns/differenceInDays'
// Context
import { useContext } from 'react'
import { BlogProvider } from '../../../../contexts/BlogContext'

export function BlogPosts() {
  const { blogPosts } = useContext(BlogProvider)

  const nPosts = blogPosts.length

  return (
    <Publications>
      <SearchBar>
        <div>
          <h3>Publicações</h3>
          <p>{nPosts} publicações</p>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchBar>
      <Blog>
        {blogPosts.map((post, index) => {
          const timeDifference = differenceInDays(
            new Date(),
            new Date(post.lastUpdate),
          )

          const postPreview = post.body.slice(0, 255) + '...'

          return (
            <Posts key={index + post.title}>
              <a href={post.link}>
                <h1>{post.title}</h1>
              </a>
              <p>
                <ReactMarkdown>{postPreview}</ReactMarkdown>
              </p>
              <p className="postDate">Há {timeDifference} Dia(s)</p>
            </Posts>
          )
        })}
      </Blog>
    </Publications>
  )
}
