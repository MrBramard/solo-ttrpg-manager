function Sidebar({scenes, onAddScene: onAddScene, onDeleteScene, activeScene, setActiveScene}) {

    const sortedScenes = scenes.sort((a, b) => b.lastModified - a.lastModified)

    return <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>Scenes</h1>
            <button onClick={onAddScene}>Add</button>
        </div>
        <div className='app-sidebar-notes'> 
            { 
                sortedScenes.map((scene) => {
                    return <div 
                                className={`app-sidebar-note ${scene.id === activeScene && 'active'}`}
                                key={scene.id}
                                onClick={() => setActiveScene(scene.id)}>
                        <div className="sidebar-note-title">
                            <strong>{scene.title}</strong>
                            <button onClick={() => onDeleteScene(scene.id)}>delete</button>
                        </div>
                        <p>{scene.content && scene.content.substr(0,100) + '...'}</p>
                        <small className="note-meta">
                            Last modified {new Date(scene.lastModified).toLocaleDateString('en-CA', {
                                hour: "2-digit", minute: '2-digit'
                            })}
                        </small>
                    </div>
                })
            }
        </div>
    </div>
}

export default Sidebar;