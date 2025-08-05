import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Gubbio",
  canonical: links.servizi["frantoio-mobile-inerti"]["gubbio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Gubbio",
  locationNames: { label: "Gubbio", href: "gubbio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
