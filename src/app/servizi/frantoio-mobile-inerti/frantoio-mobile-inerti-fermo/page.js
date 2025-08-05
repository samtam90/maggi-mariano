import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Fermo",
  canonical: links.servizi["frantoio-mobile-inerti"]["fermo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Fermo",
  locationNames: { label: "Fermo", href: "fermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
