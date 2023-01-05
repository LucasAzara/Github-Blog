// CSS
import { Publications, SearchBar, Blog, Posts } from './styles'
// React Markdown
import ReactMarkdown from 'react-markdown'
// Date
import differenceInDays from 'date-fns/differenceInDays'
// Context
import { useContext } from 'react'
import { BlogProvider } from '../../../../contexts/BlogContext'
// Zod & React Form Hook
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink } from 'react-router-dom'

// Zod Schema
const searchFormSchema = z.object({
  query: z.string(),
})

// Zod Type
type TSearchFormSchema = z.infer<typeof searchFormSchema>

export function BlogPosts() {
  // BlogPosts
  const { blogPosts, getGithubPosts } = useContext(BlogProvider)
  // Number of Blog Posts
  const nPosts = blogPosts.length
  // React Form Hook
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearch = async (data: TSearchFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    getGithubPosts(data.query)
  }

  return (
    <Publications>
      <SearchBar onSubmit={handleSubmit(handleSearch)}>
        <div>
          <h3>Publicações</h3>
          <p>{nPosts} publicações</p>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </SearchBar>
      <Blog>
        {blogPosts.map((post, index) => {
          const timeDifference = differenceInDays(
            new Date(),
            new Date(post.lastUpdate),
          )
          const postPreview = post.body.slice(0, 255) + '...'
          const postId = post.link.at(-1)

          return (
            <Posts key={index + post.title}>
              <NavLink to={`/post/${postId}`}>
                <h1>{post.title}</h1>
              </NavLink>
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
