import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monteroni d'Arbia",
  canonical: links.servizi["centrifugazione-fanghi"]["monteroni-d-arbia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monteroni d'Arbia",
  locationNames: { label: "Monteroni d'Arbia", href: "monteroni-d-arbia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
