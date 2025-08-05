import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Alviano",
  canonical: links.servizi["frantoio-mobile-inerti"]["alviano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Alviano",
  locationNames: { label: "Alviano", href: "alviano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
