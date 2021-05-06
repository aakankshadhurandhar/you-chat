import React, { useState } from 'react'

import { Button, deleteChat } from 'react-chat-engine'

import { LeftOutlined, DownOutlined } from '@ant-design/icons'

/*implement a logout function simply by clearing username/password stored in localstorage + reload the page to LoginForm */
function handleClick() {
    localStorage.clear();
    window.location.reload();
}
function changeTheme(){
    const theme= document.querySelector("#theme-link");
    theme.getAttribute("href") === "Dark.css"? theme.href ="App.css" : theme.href = "Dark.css";
}
const OptionsSettings = props => {
    const [state, setState] = useState({
        collapsed: true,
        hovered: false
    })

    return (
        <div style={{ borderTop: '1px solid #f0f0f0' }}>
            <div 
                id='ce-options-drop-down'
                onMouseEnter={() => setState({ ...state, hovered: true })}
                onMouseLeave={() => setState({ ...state, hovered: false })}
                onClick={() => setState({ ...state, collapsed: !state.collapsed })}
                style={state.hovered ? { backgroundColor: '#f0f0f0', cursor: 'pointer' } : {}}
            >
                <div style={{ fontSize: '17px', padding: '12px', fontWeight: '600' }}>
                    Options
                </div>

                {
                    state.collapsed ?
                    <LeftOutlined style={styles.collapseIcon} /> :
                    <DownOutlined style={styles.collapseIcon} />
                }
            </div>
            
            {
                !state.collapsed &&
                <div>
                    <div style={{ height: '12px' }} />

                    <Button 
                        value="Delete" 
                        theme='danger'
                        icon='delete'
                        id='ce-delete-chat-button'
                        onClick={() => deleteChat(props, props.id, (data) => {})}
                        style={{ width: '100%', marginBottom: '12px' }}
                    />
                    <Button 
                        value="Log Out" 
                        theme='danger'
                        id='ce-delete-chat-button'
                        onClick={handleClick}
                        style={{ width: '100%', marginBottom: '12px' }}
                    />
                    <Button 
                        class="btn-toggle"
                        value="Dark theme" 
                        theme='danger'
                        id='ce-delete-chat-button'
                        onClick={changeTheme}
                        style={{ width: '100%', marginBottom: '12px' }}
                    />
                </div>
            }
        </div>
    )
}

export default OptionsSettings

const styles = {
    collapseIcon: {
        float: 'right',
        position: 'relative',
        bottom: '30px',
        right: '12px'
    }
}