import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Castellina in Chianti",
  canonical: links.servizi["centrifugazione-fanghi"]["castellina-in-chianti"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Castellina in Chianti",
  locationNames: { label: "Castellina in Chianti", href: "castellina-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
