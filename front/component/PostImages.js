import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
function PostImages({images}) {
    const [showImagesZoom, setShowImagesZoom]=useState(false)
    const onZoom = useCallback(
        () => {
            setShowImagesZoom(true);
        },
        [],
    );

    if(images.length===1){
        return (
            <>
                <img src={images[0].src} alt={images[0].src} 
                 onClick={onZoom}/>
            </>
        )
    }
    return (
        <div>
            PostImages
        </div>
    )
}
PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
}

export default PostImages
