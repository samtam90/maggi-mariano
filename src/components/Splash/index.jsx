import React, { memo } from "react";
import appConfig from "../../../app.config";

function SplashScreen({
  logoSrc,
  logoAlt,
  backgroundColor,
  onLoad,
  message,
  title,
  onButtonClick,
}) {
  let messageContent = null,
    footerContent = null;

  if (message) {
    messageContent = (
      <section className="mt-8 lg:mt-12 ml-4 mr-4">
        {title && (
          <h1 className="mb-2 text-grey-darkest text-3xl font-titleBold text-center">
            {title}
          </h1>
        )}
        <p className="font-content text-basemd text-grey-darker text-center">
          {message}
        </p>
      </section>
    );
  }

  if (onButtonClick) {
    footerContent = (
      <footer className="m-4 mb-0 flex justify-center">
        <button
          type="button"
          className="inline-flex font-title justify-center items-center text-green-dark border border-green-dark text-sm py-2 px-3 rounded-lg bg-green-dark text-white lg:hover:opacity-75 lg:transition-opacity"
          onClick={onButtonClick}
        >
          Ricarica
        </button>
      </footer>
    );
  }

  return (
    <article
      className="w-screen h-screen flex flex-col items-center justify-center bg-white"
      style={{ backgroundColor }}
    >
      <div className="lg:w-1/3">
        <header className="flex justify-center items-center">
          <img
            alt={logoAlt}
            src={logoSrc}
            onLoad={onLoad}
            className="object-contain"
          />
        </header>
        {messageContent}
        {footerContent}
      </div>
    </article>
  );
}

export function renderSplashScreen(args) {
  return (
    <SplashScreen
      logoAlt={appConfig.misc.title}
      logoSrc={appConfig.misc.logoSrc}
      title={appConfig.misc.title}
      message={args?.message || "Sito in caricamento..."}
    />
  );
}

export default memo(SplashScreen);
