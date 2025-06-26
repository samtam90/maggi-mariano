import appConfig from "../../../../app.config";
import PrivacySettingsPanel from "../PrivacySettingsPanel";
import React, { memo, useCallback, useEffect, useState } from "react";
import Context from "./context";
import { allMatch } from "../../../misc/functions";

function isGoogleBot() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.indexOf("Googlebot") !== -1;
  }
  return false;
}

/**
 * @typedef {{
 *    setItem: (name: string, value: any) => void,
 *    getItem: (name: string) => any
 * }} Storage
 * @typedef {{id: string, default?: any}} Setting
 */

/**
 * @typedef {{open: boolean, values?: Record<string, any>}} PrivacyPanelState
 * @param {{
 *    defaultState: PrivacyPanelState,
 *    storage: Storage,
 *    settings: Setting[]
 * }} defaultData
 */
export function usePrivacyPanelState({ defaultState, settings, storage }) {
  const [state, setState] = useState(defaultState);

  const onChange = useCallback(
    (values) => {
      /* sets values in current state & persists them in storage */
      Object.getOwnPropertyNames(values).map((v) =>
        storage.setItem(v, values[v])
      );
      setState((s) => ({ ...s, open: false }));
    },
    [setState, storage]
  );

  const setOpen = useCallback(
    (open) =>
      setState((s) => ({
        open,
        values: open
          ? getDefaultSettingValues({ settings, storage })
          : s.values,
      })),
    [setState, settings]
  );

  return { state, setState, setOpen, onChange };
}

/**
 * @param {{storage: Storage, settings: Setting[]}} storage
 * @returns
 */
function hasAllSettingValues({ storage, settings }) {
  return allMatch(settings, (el) => storage.getItem(el.id) !== null);
}

/**
 * @param {{settings: Setting[], storage: Storage}} param0
 * @returns
 */
function getDefaultSettingValues({ settings, storage }) {
  let out = {};
  for (const setting of settings) {
    const cVal = storage.getItem(setting.id);
    if (cVal === null) {
      out[setting.id] = setting.default;
    } else {
      out[setting.id] = cVal;
    }
  }
  return out;
}

/**
 * @param {{
 *    children: ReactNode,
 *    mobile?: boolean,
 *    storage: Storage,
 *    title: string,
 *    subtitle: string,
 *    sections?: any[],
 *    settings: Setting[]
 * }} param0
 * @returns
 */
function PrivacySettingsWrapper({
  children,
  mobile,
  storage,
  title,
  subtitle,
  sections,
  settings,
}) {
  const { state, onChange, setOpen } = usePrivacyPanelState({
    storage,
    settings,
    defaultState: { open: false },
  });

  /* only triggered on client, otherwise hydration fails after ssr */
  useEffect(() => {
    /* automatically opens if some values are missing */
    const hasAllValues = hasAllSettingValues({ storage, settings });
    if (!hasAllValues) {
      setOpen(true);
    }
  }, [setOpen, storage, settings]);

  return (
    <Context.Provider value={{ setOpen, open: state.open }}>
      <PrivacySettingsPanel
        title={title}
        subtitle={subtitle}
        sections={sections}
        settings={settings}
        logo={{
          src: appConfig.misc.logoSrc,
          dimensions: { width: 100, height: 70 },
          alt: appConfig.misc.title,
        }}
        onChange={onChange}
        open={state.open && !isGoogleBot()}
        defaultValues={state.values}
        variant={mobile ? "drawer" : "dialog"}
      />
      {children}
    </Context.Provider>
  );
}

export default memo(PrivacySettingsWrapper);
