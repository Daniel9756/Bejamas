import React from 'react'
import Image from "next/image";
import Button from "@material-ui/core/Button";


function ImagePage({image, id}) {
    return (
        <div>
              <Image
                src={image.src}
                alt="Vercel Logo"
                width={120}
                height={150}
              
              /> 
              
        </div>
    )
}

export default ImagePage
