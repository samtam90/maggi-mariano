import React, { useContext } from "react";
import PrivacySettingsPanelWrapper from ".";
import AppThemeProvider from "../../AppThemeProvider";
import appConfig from "../../../../app.config";
import { dummyStorageOf } from "../../../misc/auxiliary";
import context from "../PrivacySettingsPanelWrapper/context";

export default {
  title: "PrivacySettingsPanelWrapper",
  component: PrivacySettingsPanelWrapper,
};

function AuxButton() {
  const { setOpen } = useContext(context);
  return (
    <button
      className="text-sm font-title text-gray-700"
      type="button"
      onClick={() => setOpen(true)}
    >
      Open
    </button>
  );
}

const T = (args) => (
  <AppThemeProvider>
    <PrivacySettingsPanelWrapper {...args}>
      <AuxButton />
    </PrivacySettingsPanelWrapper>
  </AppThemeProvider>
);

const baseArgs = {
  ...appConfig.data.privacy,
  mobile: false,
};

export const MissingValues = T.bind({});
MissingValues.args = {
  ...baseArgs,
  storage: dummyStorageOf({}),
};

export const AllValuesPresent = T.bind({});
AllValuesPresent.args = {
  ...baseArgs,
  storage: dummyStorageOf({
    essential_cookies: "accepted",
    third_party_cookies: "not_accepted",
  }),
};
