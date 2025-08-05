import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Potenza",
  canonical: links.servizi["frantoio-mobile-inerti"]["potenza"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Potenza",
  locationNames: { label: "Potenza", href: "potenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
