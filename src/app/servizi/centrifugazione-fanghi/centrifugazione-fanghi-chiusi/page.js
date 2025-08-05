import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Chiusi",
  canonical: links.servizi["centrifugazione-fanghi"]["chiusi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Chiusi",
  locationNames: { label: "Chiusi", href: "chiusi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
