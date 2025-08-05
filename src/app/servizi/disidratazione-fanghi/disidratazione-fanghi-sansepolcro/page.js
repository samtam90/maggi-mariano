import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sansepolcro",
  canonical: links.servizi["disidratazione-fanghi"]["sansepolcro"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sansepolcro",
  locationNames: { label: "Sansepolcro", href: "sansepolcro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
