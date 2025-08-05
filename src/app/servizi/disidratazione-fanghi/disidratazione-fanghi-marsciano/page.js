import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Marsciano",
  canonical: links.servizi["disidratazione-fanghi"]["marsciano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Marsciano",
  locationNames: { label: "Marsciano", href: "marsciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
