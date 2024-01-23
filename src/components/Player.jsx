import {useState} from "react";

export const Player = ({name, symbol, current}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [updatedName, setUpdatedName] = useState(name)

    const handleSetEditing = () => {
        setIsEditing((prevState) => !prevState)
    }

    const handleUpdate = (event) => {
        setUpdatedName(event.target.value)
    }

    return (
        <li className={current ? 'active' : undefined}>
            <span className='player'>
                {
                    !isEditing ? (
                        <span className='player-name'>{updatedName}</span>
                    ) : (
                        <input type={'text'} value={updatedName} required={true} onChange={handleUpdate}/>
                    )
                }
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleSetEditing}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
};