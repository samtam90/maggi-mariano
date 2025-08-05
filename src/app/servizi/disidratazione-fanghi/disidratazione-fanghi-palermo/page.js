import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Palermo",
  canonical: links.servizi["disidratazione-fanghi"]["palermo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Palermo",
  locationNames: { label: "Palermo", href: "palermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
