import { Box, Collapse, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandItem: React.FC<{}> = () => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggle = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Box
        
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
            <img src={"/images/Pets/17846820302631474.jpg"} alt="img" height="270px" width="300px" />
          </Box>
          <Box ml={2}>
            <img src={"/images/Pets/17846820302631474.jpg"} alt="img" height="270px" width="300px" />
          </Box>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid
            container
            spacing={2}
            
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              event.stopPropagation()
            }
          >
            <Grid item xs={12} sm={4}>
                <img src={"/images/Pets/17846820302631474.jpg"} alt="img" height="270px" width="300px" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={"/images/Pets/17846820302631474.jpg"} alt="img" height="270px" width="300px" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={"/images/Pets/17846820302631474.jpg"} alt="img" height="270px" width="300px" />
            </Grid>
          </Grid>
        </Collapse>
      </Box>
    );
  };

export default ExpandItem;