// CSS
import { Publications, SearchBar, Blog, Posts } from './styles'
// React Markdown
import ReactMarkdown from 'react-markdown'
// Date
import differenceInDays from 'date-fns/differenceInDays'
// Context
import { useCallback, useContext } from 'react'
import { BlogProvider } from '../../../../contexts/BlogContext'
// Zod & React Form Hook
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

// Zod Schema
const searchFormSchema = z.object({
  query: z.string(),
})

// Zod Type
type TSearchFormSchema = z.infer<typeof searchFormSchema>

export function BlogPosts() {
  // BlogPosts
  const blogPosts = useContextSelector(
    BlogProvider,
    (context) => context.blogPosts,
  )

  const getGithubPosts = useContextSelector(
    BlogProvider,
    (context) => context.getGithubPosts,
  )

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

  const handleSearch = useCallback(
    async (data: TSearchFormSchema) => {
      // Query to search for Post
      getGithubPosts(data.query)
    },
    [getGithubPosts],
  )

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
