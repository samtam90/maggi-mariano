import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Livorno",
  canonical: links.servizi["disidratazione-fanghi"]["livorno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Livorno",
  locationNames: { label: "Livorno", href: "livorno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
