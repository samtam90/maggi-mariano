import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Roma",
  canonical: links.servizi["disidratazione-fanghi"]["roma"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Roma",
  locationNames: { label: "Roma", href: "roma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
