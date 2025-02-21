import { useEffect } from 'react'

const ShareSNS = (url: string): void => {
    useEffect(() => {
        const script: HTMLScriptElement = document.createElement('script')
        script.src = url
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [url])
}
export default ShareSNS
