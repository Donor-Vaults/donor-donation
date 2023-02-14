
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
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
    const title = 'Donor Platfrom';
    return <Box mt={1}>
        <Typography variant="h6"
            color="#fff"
            textAlign={"center"}>
            Share Now
        </Typography>
        
         <div className="Demo__container" style={{
        display: "flex",
        // marginTop:"10px"
    }}>
    <div className="Demo__some-network">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <div>
        <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
          {count => count}
        </FacebookShareCount>
      </div>
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