import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Siena",
  canonical: links.servizi["centrifugazione-fanghi"]["siena"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Siena",
  locationNames: { label: "Siena", href: "siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
