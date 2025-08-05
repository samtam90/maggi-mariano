import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Greve in Chianti",
  canonical: links.servizi["disidratazione-fanghi"]["greve-in-chianti"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Greve in Chianti",
  locationNames: { label: "Greve in Chianti", href: "greve-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
