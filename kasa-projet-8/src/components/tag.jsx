import './style/componentsSCSS/tag.scss'

const TagName = (props) => {
    return(
        <>
        <div className='tag'>
            <span className='tag-name'>{props.tags}</span>
        </div>
        </>
    );
}

export default TagName;