import { Grid, IconButton, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState, useEffect, useCallback, useRef } from 'react';

function mapPictures(context: __WebpackModuleApi.RequireContext) {
  return context.keys().map((key) => context(key) as string);
}

const images = mapPictures(require.context("../../../public/images/duck_pictures", false, /\.(png|jpe?g|svg)$/));

const CarouselOne = () => {
    const [currentImageSetIndex, setCurrentImageSetIndex] = useState(0);
    const imagesPerSlide = 3;
    const totalImageSets = Math.ceil(images.length / imagesPerSlide);

    const autoScrollRef = useRef<NodeJS.Timeout>();

    const nextSet = useCallback(() => {
        setCurrentImageSetIndex((prevIndex) => (prevIndex + 1) % totalImageSets);
    }, [totalImageSets]);

    const prevSet = useCallback(() => {
        setCurrentImageSetIndex((prevIndex) => {
          if (prevIndex <= 0) return totalImageSets - 1;
          return prevIndex - 1;
        });
    }, [totalImageSets]);

    // Resets the auto-scroll timer
    const resetAutoScroll = useCallback(() => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        autoScrollRef.current = setInterval(nextSet, 3000);
    }, [nextSet]);

    // Set up and clear the interval for automatic transitions
    useEffect(() => {
        resetAutoScroll();
        return () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
            }
        };
    }, [resetAutoScroll]);

    // Handle manual navigation
    const handleNextClick = useCallback(() => {
        nextSet();
        resetAutoScroll();
    }, [nextSet, resetAutoScroll]);

    const handlePrevClick = useCallback(() => {
        prevSet();
        resetAutoScroll();
    }, [prevSet, resetAutoScroll]);

    const startImageIndex = currentImageSetIndex * imagesPerSlide;
    const currentImages = images.slice(startImageIndex, startImageIndex + imagesPerSlide);

    return (
      <Box display="flex" alignItems="center">
        <IconButton onClick={handlePrevClick} aria-label="previous set">
          <ArrowBackIosIcon />
        </IconButton>
        <Grid container spacing={3} justifyContent="center">
          {currentImages.map((image, index) => (
            <Grid item key={`${image}-${index}`} xs={12} md={4} lg={4}>
              <img src={image} alt="img" height="380px" width="100%" />
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNextClick} aria-label="next set">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    );
};

export default CarouselOne;
