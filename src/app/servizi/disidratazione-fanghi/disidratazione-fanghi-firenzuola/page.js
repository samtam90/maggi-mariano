import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Firenzuola",
  canonical: links.servizi["disidratazione-fanghi"]["firenzuola"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Firenzuola",
  locationNames: { label: "Firenzuola", href: "firenzuola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
