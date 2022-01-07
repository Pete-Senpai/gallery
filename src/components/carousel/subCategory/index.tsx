import { Box } from '@mui/material';
import React from 'react';

// function mapPictures(context: __WebpackModuleApi.RequireContext) {
//     return context.keys().map((key) => context(key).default as string);
// }
// const images = mapPictures(require.context("../../../public/images/Abstract", false, /\.(png|jpe?g|svg)$/));

const SubCategory = (props: {item1: any, item2: any, item3: any}) => {
    return (
        <Box>
            <img src={props.item1} alt="img" height="380px" width="33%" />
            <img src={props.item2} alt="img" height="380px" width="33%" />
            <img src={props.item3} alt="img" height="380px" width="33%" />
        </Box>
    );
};

export default SubCategory;