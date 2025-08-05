import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Gaiole in Chianti",
  canonical: links.servizi["disidratazione-fanghi"]["gaiole-in-chianti"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Gaiole in Chianti",
  locationNames: { label: "Gaiole in Chianti", href: "gaiole-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
