import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownContentProps {
    content: string
}
export const MarkdownContent = ({ content }: MarkdownContentProps) => {
    return (
        <article className="prose prose-slate prose-headings:text-primary prose-a:text-blue-600 max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    )
}
