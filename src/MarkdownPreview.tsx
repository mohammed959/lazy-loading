type MarkdownPreviewType = {
    markdown:string
}

export default function MarkdownPreview({ markdown }:MarkdownPreviewType) {
    return <div className="content">{markdown}</div>;
  }
  