import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ferentillo",
  canonical: links.servizi["frantoio-mobile-inerti"]["ferentillo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ferentillo",
  locationNames: { label: "Ferentillo", href: "ferentillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
