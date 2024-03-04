import React from 'react';
import styled from 'styled-components';

const ImageItemLink = styled.a`
    display:block; width:auto; text-decoration:none; color:#222; padding:10px; border-bottom:dotted 1px #d5d5d5; cursor:pointer; position:relative; padding-left:120px; min-height:100px;
    &:hover { background-color:#eee }

    .img { width:100px; height:100px; background-color:#fff; background-position:center center; background-repeat:no-repeat; background-size:cover; position:absolute; left:10px; top:10px }

    .img_size { font-size:20px; font-weight:normal; padding:0; margin:0 0 10px 0 }

    .sitename { font-size:14px; padding:0; margin:0 }
`;

const ImageItem = ({item}) => {
    return (
        <ImageItemLink href={item.doc_url} target="_blank">
            <div className="img"
                style={{backgroundImage: 'url(' + item.image_url + ')'}} />
            <p className="img_size">{item.width}x{item.height}</p>
            <p className="sitename">{item.display_sitename}</p>
        </ImageItemLink>
    );
};

export default ImageItem;