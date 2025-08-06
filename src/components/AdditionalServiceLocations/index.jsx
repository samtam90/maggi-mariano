"use client";

import { twClsx } from "../../misc/functions";
import React, { memo, useMemo, useState } from "react";
import { components } from "@italwebcom/tailwind-components";

const { Collapse } = components;

function useShownElementsManagement({ elements, maxInitialShown }) {
  const [expanded, setExpanded] = useState(false);
  const { shown, notShown } = useMemo(
    () => ({
      shown: maxInitialShown ? elements.slice(0, maxInitialShown) : elements,
      notShown: maxInitialShown ? elements.slice(maxInitialShown) : [],
    }),
    [elements, maxInitialShown]
  );
  return { expanded, setExpanded, shown, notShown };
}

function renderList({ locations, serviceName, className }) {
  return (
    <ul
      className={twClsx(
        "grid grid-cols-4 lg:grid-cols-6 gap-4 text-xxs lg:text-xs",
        className
      )}
    >
      {locations.map((location) => (
        <li key={location}>
          <p className="text-gray-700">
            &bull; {serviceName} a {location}
          </p>
        </li>
      ))}
    </ul>
  );
}

/**
 * @returns
 * @param {{
 *    locations: string[],
 *    serviceName: string,
 *    paragraphSuffix?: string,
 *    classNames?: {root?: string, paragraph?: string},
 *    maxInitialShownLocations?: number
 * }} param0
 */
function AdditionalServiceLocations({
  locations,
  serviceName,
  paragraphSuffix,
  classNames,
  maxInitialShownLocations,
}) {
  const { expanded, setExpanded, shown, notShown } = useShownElementsManagement(
    { elements: locations, maxInitialShown: maxInitialShownLocations }
  );

  return (
    <div
      className={twClsx(
        "font-title text-sm lg:text-md leading-normal mt-6",
        classNames?.root
      )}
    >
      <p className={twClsx("text-gray-600 mb-6", classNames?.paragraph)}>
        Inoltre effettuiamo il servizio di {serviceName} presso le seguenti
        località{paragraphSuffix}:
      </p>
      {renderList({
        locations: shown,
        serviceName,
        key: "shown",
        className: "mb-4",
      })}
      <Collapse collapsed={!expanded}>
        {renderList({ locations: notShown, serviceName, key: "not-shown" })}
      </Collapse>
      <footer className="mt-3">
        {!expanded && !!maxInitialShownLocations && !!notShown.length && (
          <div
            role="button"
            onClick={() => setExpanded(true)}
            className="text-blue-500 text-sm inline-block cursor-pointer lg:hover:underline transition-opacity"
          >
            ed altre {notShown.length} località
          </div>
        )}
      </footer>
    </div>
  );
}

export default memo(AdditionalServiceLocations);
