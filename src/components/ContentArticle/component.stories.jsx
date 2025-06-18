import React from "react";
import ContentArticle from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: ContentArticle,
  title: "ContentArticle",
};

const T = (args) => (
  <AppThemeProvider>
    <div className="min-h-[100vh] max-w-4xl mx-auto">
      <ContentArticle {...args}>
        {args.sections.map(
          ({ title, paragraphs, mediaElements, mediaPosition }, index) => (
            <ContentArticle.Section
              key={index}
              title={title}
              paragraphs={paragraphs}
              mediaElements={mediaElements}
              mediaPosition={mediaPosition}
            />
          )
        )}
      </ContentArticle>
    </div>
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  title: { left: "Pulizia fognature Camucia", right: "Maggi mariano" },
  sections: [
    {
      title: "Escavatore a risucchio - Funzionamento",
      paragraphs: [
        "Nel meccanismo dell'escavatore a risucchio è presente una ventola che genera una corrente d'aria fino a 44.000 mb/h e produce una sottopressione massima di 55.000 Pa. Il materiale viene dunque aspirato tramite la corrente d'aria.",
        "Con questo mezzo possono essere aspirati tutti i tipi di materiali solidi fino ad una dimensione massima di 250 mm.",
        "La posizione del contenitore di raccolta dell'escavatore a risucchio fa si che gli assi del veicolo non vengano sollecitati.",
      ],
      mediaPosition: "bottom",
      mediaElements: [
        {
          type: "image",
          srcset:
            "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-2-1024x682.jpg 1024w, https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-2-300x200.jpg 300w, https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-2-768x511.jpg 768w, https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-2.jpg 1400w",
          dimensions: { width: 800, height: 533 },
          label: "Image 1",
        },
        {
          type: "iframe",
          src: "https://www.youtube.com/embed/IHnfAuhtzPU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fcentrifugazione-o-disidratazione-fanghi%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2F&vf=6",
          dimensions: { width: 650, height: 350 },
          label: "Video 1",
        },
      ],
    },
  ],
};
