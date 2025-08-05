import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Fermo",
  canonical: links.servizi["disidratazione-fanghi"]["fermo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Fermo",
  locationNames: { label: "Fermo", href: "fermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
