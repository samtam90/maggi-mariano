import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Firenze",
  canonical: links.servizi["disidratazione-fanghi"]["firenze"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
