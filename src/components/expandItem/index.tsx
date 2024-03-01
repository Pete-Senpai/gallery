import { Box, Card, CardMedia, Collapse, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function mapPictures(context: __WebpackModuleApi.RequireContext) {
  return context.keys().map((key) => context(key).default as string);
}
const images = mapPictures(require.context("../../../public/images/duck_pictures", false, /\.(png|jpe?g|svg)$/));

const ExpandItem: React.FC<{}> = () => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggle = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Box
        sx={{bgcolor: '#cfe8fc'}}
        onClick={handleToggle}
      >
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            
          >
            
            <IconButton
              size="small"
              aria-expanded={expanded}
              onClick={() => setExpanded(!expanded)}
            >
              <ExpandMoreIcon
                sx={{ transform: "rotate(180deg)" }}
              />
            </IconButton>
          </Box>
          
          <Box flex={1}>
            <img src={"/images/duck_pictures/duck4.jpg"} alt="img" height="350px" width="350px" />
          </Box>
          <Box flex={1} sx={{justifyContent: "center", alignItems: "center", position: "relative"}}>
            <Typography>Pets</Typography>
          </Box>
          <Box ml={2} paddingRight={3}>
            <img src={"/images/duck_pictures/duck3.jpg"} alt="img" height="350px" width="350px" />
          </Box>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid
            container
            spacing={2}
            padding={2}
            paddingLeft={4}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              event.stopPropagation()
            }
          >
            <Grid item xs={12} sm={4}>
                <img src={"/images/duck_pictures/duck4.jpg"} alt="img" height="350px" width="350px" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={"/images/duck_pictures/duck2.jpg"} alt="img" height="350px" width="350px" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={"/images/duck_pictures/duck3.jpg"} alt="img" height="350px" width="350px" />
            </Grid>
          </Grid>
          <Grid container spacing={3} p={3} pl={4}>
                {images.map(image => (
                    <Grid item key={image} xs={12} md={6} lg={4}>
                        <Card>
                            {/* <CardHeader
                                title={photos.title}
                            /> */}
                            <CardMedia 
                                component="img"
                                height="350px"
                                image={image}
                                alt="photo"
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Collapse>
      </Box>
    );
  };

export default ExpandItem;