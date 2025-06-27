import React, { memo, useContext, useEffect, useState } from "react";
import Context from "../../../components/privacy/PrivacySettingsPanelWrapper/context";
import EmbeddedMap from "../../../components/EmbeddedMap";
import { twClsx } from "../../../misc/functions";

function isDisabled() {
  return localStorage.getItem("third_party_cookies") !== "accepted";
}

export function useDisabledMgmt() {
  const { open } = useContext(Context);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(isDisabled());
  }, [open]);
  return disabled;
}

export function DisabledMessage({ setOpen, message }) {
  return (
    <p className="px-8 lg:px-0 lg:max-w-[75%] inline-block text-sm text-center text-gray-600 font-title">
      {message} <br />
      <br />
      Per visualizzare il contenuto devi{" "}
      <button
        type="button"
        className="text-blue-400 underline text-sm"
        onClick={() => setOpen(true)}
      >
        abilitare i cookie di terze parti nelle impostazioni
      </button>
      .
    </p>
  );
}

/**
 * @typedef {{title: string, subtitle: string, src: string}} MapData
 * @param {{
 *    data: MapData[],
 *    dimensions: {width: number, height: number},
 *    classNames?: {root: string, map: string}
 * }} param0
 * @returns
 */
function EmbeddedMapsWrapper({ data, dimensions, classNames }) {
  const disabled = useDisabledMgmt();
  const { setOpen } = useContext(Context);
  return (
    <div
      className={twClsx(
        "grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 lg:py-8 lg:gap-8",
        classNames?.root
      )}
    >
      {data.map(({ title, subtitle, src }, index) => (
        <EmbeddedMap
          title={title}
          subtitle={subtitle}
          src={src}
          key={`${title}-${index}`}
          dimensions={dimensions}
          classNames={{ map: classNames?.map }}
          disabled={disabled}
          disabledMessage={
            <DisabledMessage
              message="La mappa di Google Maps non è visibile perchè i cookie di terze parti, inclusi quelli di Google, sono disattivati."
              setOpen={setOpen}
            />
          }
        />
      ))}
    </div>
  );
}

export default memo(EmbeddedMapsWrapper);
