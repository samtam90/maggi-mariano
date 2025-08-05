import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Palermo",
  canonical: links.servizi["centrifugazione-fanghi"]["palermo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Palermo",
  locationNames: { label: "Palermo", href: "palermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
