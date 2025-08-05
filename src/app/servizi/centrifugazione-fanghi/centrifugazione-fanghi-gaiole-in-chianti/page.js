import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gaiole in Chianti",
  canonical: links.servizi["centrifugazione-fanghi"]["gaiole-in-chianti"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gaiole in Chianti",
  locationNames: { label: "Gaiole in Chianti", href: "gaiole-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
