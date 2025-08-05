import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Agrigento",
  canonical: links.servizi["disidratazione-fanghi"]["agrigento"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Agrigento",
  locationNames: { label: "Agrigento", href: "agrigento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
