import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Marradi",
  canonical: links.servizi["disidratazione-fanghi"]["marradi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Marradi",
  locationNames: { label: "Marradi", href: "marradi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
