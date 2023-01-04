import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Main({activeScene, onUpdateScene}) {
    const onEditField = (key, value) => {
        onUpdateScene({
            ...activeScene,
            [key]: value,
            lastModified: Date.now()
        });
    }

    if(!activeScene) {
        return <div className="no-active-note">
            No scene selected
        </div>
    }

    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" value={activeScene.title} autoFocus  onChange={(e) => onEditField("title", e.target.value)}/>
            <textarea id="body" placeholder="Write your note here..." value={activeScene.content} onChange={(e) => onEditField("content", e.target.value)}/>
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeScene.title}</h1>
            <ReactMarkdown className="markdown-preview">{activeScene.content}</ReactMarkdown>
        </div>
    </div>
}

export default Main;