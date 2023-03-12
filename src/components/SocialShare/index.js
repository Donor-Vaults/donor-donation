
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import { Button } from "../Navbar/Navbar";
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  HatenaShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
  HatenaIcon,
} from 'react-share';


export const SocialShare = ({link}) => {
    const shareUrl = link;
    const title = 'Donor Platform';
    return <Box mt={1}>
        {/* <Typography variant="h6"
            color="#000"
           // textAlign={"center"}
          >
            Share Now
        </Typography> */}
       
        
       
      <p
          //disabled={fundraiser.fundraisers_status !== "APPROVED"}
          style={{  color: "#fff",textAlign:"center" }}
        >
          Share Now 
        </p>
      
        <div className="Demo__container" 
          style={{width:'100%',display:'flex',justifyContent:'space-between',
            margin: '1rem 0 0 0',
            // background: "red",
            // paddingLeft: 10,
            // paddingRight:10
        }}
         >
    <div className="Demo__some-network" >
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      
    </div>

  
    <div className="Demo__some-network">
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <TelegramShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <div className="Demo__some-network__share-count">&nbsp;</div>
    </div>

    <div className="Demo__some-network">
      <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>

  
   

   

   

   

   


    <div className="Demo__some-network">
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body="body"
        className="Demo__some-network__share-button"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
   

   

  

 

   

  
      </div>
    </Box>
}