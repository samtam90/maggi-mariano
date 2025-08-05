import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Palermo",
  canonical: links.servizi["frantoio-mobile-inerti"]["palermo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Palermo",
  locationNames: { label: "Palermo", href: "palermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
