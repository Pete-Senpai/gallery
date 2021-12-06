import { Box } from '@mui/material';
import React from 'react';

// function mapPictures(context: __WebpackModuleApi.RequireContext) {
//     return context.keys().map((key) => context(key).default as string);
// }
// const images = mapPictures(require.context("../../../public/images/Abstract", false, /\.(png|jpe?g|svg)$/));

const SubCategory = (props: {items: any}) => {
    return (
        <Box>
            <img src={"/images/originalArtwork/Dawn.jpg"} alt="img" height="380px" width="33%" />
            <img src={"/images/originalArtwork/Dawn.jpg"} alt="img" height="380px" width="33%" />
            <img src={"/images/originalArtwork/Dawn.jpg"} alt="img" height="380px" width="33%" />
        </Box>
    );
};

export default SubCategory;