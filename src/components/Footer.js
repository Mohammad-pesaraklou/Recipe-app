import { Grid, Typography } from '@mui/material';
import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './styles/Contact.module.css';

function Footer() {
    return (
        <footer style={{textAlign: 'center',padding: '20px 0',background: 'transparent',marginTop: '50px',
        boxShadow: "0px -11px 33px 0px rgb(8,7,7)"
        }}>
        <Grid container>
        <Grid item xs={12}>
              
              <div style={{display: 'flex',justifyContent: 'space-evenly',width: '90vw'}}>
                       <a href="https://www.instagram.com/_.mhwmd6" className={styles.links} >
                          <FaInstagram fontSize="30px" color='#dc2743'/> 
                          <Typography color={"#cecece"} variant="subtitle1" fontFamily='Montserrat'>
                              Instagram
                          </Typography>
                      </a>
                      <a href="https://github.com/Mohammad-pesaraklou" className={styles.links} target="_blank">
                        <FaGithub fontSize="30px" color={"#6c6565"}/>
                        <Typography color={"#cecece"} variant="subtitle1" fontFamily='Montserrat'>
                              github
                      </Typography>
                      </a>
                      <a href="mailto: mhmdpsr6@gmail.com" className={styles.links} >
                        <HiOutlineMail fontSize="30px" color={"#3f9885"}/>
                        <Typography color={"#cecece"} variant="subtitle1" fontFamily='Montserrat'>
                              Email
                      </Typography>
                      </a>

              </div>
              <div className={styles.copyR}>
              <Typography color="secondary" fontFamily='Montserrat'>
              &copy;
              This Portfolio Project Created in 8/28/2022
              </Typography>
              </div>
          </Grid>
        </Grid>
        </footer>
    );
}


export default Footer;