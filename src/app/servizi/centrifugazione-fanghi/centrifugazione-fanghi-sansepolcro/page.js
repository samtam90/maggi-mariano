import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sansepolcro",
  canonical: links.servizi["centrifugazione-fanghi"]["sansepolcro"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sansepolcro",
  locationNames: { label: "Sansepolcro", href: "sansepolcro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
