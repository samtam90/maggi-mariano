import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Attigliano",
  canonical: links.servizi["frantoio-mobile-inerti"]["attigliano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Attigliano",
  locationNames: { label: "Attigliano", href: "attigliano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
