import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Terni",
  canonical: links.servizi["frantoio-mobile-inerti"]["terni"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Terni",
  locationNames: { label: "Terni", href: "terni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
