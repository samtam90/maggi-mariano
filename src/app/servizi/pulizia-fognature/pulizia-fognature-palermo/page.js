import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Palermo",
  canonical: links.servizi["pulizia-fognature"]["palermo"],
});
export default withBaseProps({
  title: "Pulizia fognature Palermo",
  locationNames: { label: "Palermo", href: "palermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
