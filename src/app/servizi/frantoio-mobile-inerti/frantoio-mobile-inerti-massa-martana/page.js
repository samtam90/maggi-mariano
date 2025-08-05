import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Massa Martana",
  canonical: links.servizi["frantoio-mobile-inerti"]["massa-martana"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Massa Martana",
  locationNames: { label: "Massa Martana", href: "massa-martana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
