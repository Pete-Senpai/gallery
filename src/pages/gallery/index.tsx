import { Card, CardHeader, CardMedia, Container, Grid } from '@mui/material';
import React from 'react';

const photos = [
    {
        photo:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/239468282_4772962376155021_5895707963065349972_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGka-vM_rkcTCzPvPgbU8a5UtFVQorY2cpS0VVCitjZyugPsr6WgVhcbFxbziP3zQYtbIM_S08V_lbKy-KRf-tw&_nc_ohc=E6MxPXtFia4AX8as8SR&_nc_ht=scontent.fbeg1-1.fna&oh=43fbc7be956fb2b2efc36205844d23a9&oe=616B8A87",
        title:"Rose"
    },
    {
        photo:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/232396320_4729118877206038_9067115924514914984_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGp0eUX1gIaIp1MUX43j8hc9C3r4-EMNTX0Levj4Qw1NVUL0WPSBMBE6YR70kR9nRw8l9e11MFZxbgjMsbBLR-l&_nc_ohc=ZcS7P7qEqywAX_TtmMA&_nc_ht=scontent.fbeg1-1.fna&oh=af07bbdf8934cba8fd862abc9b9032a0&oe=616D4F9E",
        title:"Dogs"
    },
    {
        photo:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/209559220_4625822674202326_5716549258690711660_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeEFHbgGQ4AaVAKUQ1eKlfmQjqHoZbQwo9qOoehltDCj2vsLKnghvfbnn8SgJSDvyz1DTXGEeue1vhiCysLfFrFd&_nc_ohc=kPAnpEJmguwAX9K55Bg&_nc_ht=scontent.fbeg1-1.fna&oh=ece283053438816661cf647b7df09e78&oe=616D3827",
        title:"Tiger"
    },
    {
        photo:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/241813029_4851381168313141_1523254842365993390_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFcPr5tm1sGSE40M_y5qAttp42ACN6CUZinjYAI3oJRmMzkkos_EBdb5waLU5rY0rPGAVYPUw-DaejmRc8ddxTy&_nc_ohc=tnCmVpAxAo4AX9EMtKo&_nc_ht=scontent.fbeg1-1.fna&oh=c79d2a00ab3e867184ed672a55bf49ae&oe=616BDE9D",
        title:"Lion"
    }
];

const Gallery = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {photos.map(photos => (
                    <Grid item key={photos.photo} xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={photos.title}
                            />
                            <CardMedia 
                                component="img"
                                height="100%"
                                image={photos.photo}
                                alt="photo"
                            />
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Gallery;