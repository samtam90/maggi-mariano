import React from "react";
import VideoGalleryTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";

export default {
  title: "Templates/VideoGallery",
  component: VideoGalleryTemplate,
};

const T = (args) => (
  <AppThemeProvider>
    <VideoGalleryTemplate {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  mobile: false,
  sections: {},
};
