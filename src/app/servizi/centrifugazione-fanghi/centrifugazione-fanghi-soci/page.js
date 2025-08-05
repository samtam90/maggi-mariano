import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Soci",
  canonical: links.servizi["centrifugazione-fanghi"]["soci"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Soci",
  locationNames: { label: "Soci", href: "soci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
