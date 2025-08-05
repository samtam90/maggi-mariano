import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Radda in Chianti",
  canonical: links.servizi["disidratazione-fanghi"]["radda-in-chianti"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Radda in Chianti",
  locationNames: { label: "Radda in Chianti", href: "radda-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
