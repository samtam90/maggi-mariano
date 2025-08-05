import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castellina in Chianti",
  canonical: links.servizi["disidratazione-fanghi"]["castellina-in-chianti"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castellina in Chianti",
  locationNames: { label: "Castellina in Chianti", href: "castellina-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
