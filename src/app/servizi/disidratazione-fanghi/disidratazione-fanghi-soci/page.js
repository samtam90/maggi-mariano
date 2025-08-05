import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Soci",
  canonical: links.servizi["disidratazione-fanghi"]["soci"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Soci",
  locationNames: { label: "Soci", href: "soci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
