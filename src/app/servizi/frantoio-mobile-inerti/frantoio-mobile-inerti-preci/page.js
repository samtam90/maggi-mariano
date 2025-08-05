import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Preci",
  canonical: links.servizi["frantoio-mobile-inerti"]["preci"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Preci",
  locationNames: { label: "Preci", href: "preci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
