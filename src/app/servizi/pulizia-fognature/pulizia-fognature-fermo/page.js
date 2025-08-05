import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Fermo",
  canonical: links.servizi["pulizia-fognature"]["fermo"],
});
export default withBaseProps({
  title: "Pulizia fognature Fermo",
  locationNames: { label: "Fermo", href: "fermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
