import React from 'react'
import Img from './../assets/images/404.jpg'

const NotFoundPage = () => {
    return (
        <>
            <img
                src={Img}
                alt='Error'
                style={{
                    backgroundPosition:'center',
                    height:'cover',
                    width:'100%',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}
            />
        </>
    )
}
export default NotFoundPage