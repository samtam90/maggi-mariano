import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Modena",
  canonical: links.servizi["disidratazione-fanghi"]["modena"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Modena",
  locationNames: { label: "Modena", href: "modena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["modena"],
      name: "Modena",
  }),
});
