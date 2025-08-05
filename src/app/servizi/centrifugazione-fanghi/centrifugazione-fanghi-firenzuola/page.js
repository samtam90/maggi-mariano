import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Firenzuola",
  canonical: links.servizi["centrifugazione-fanghi"]["firenzuola"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Firenzuola",
  locationNames: { label: "Firenzuola", href: "firenzuola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
