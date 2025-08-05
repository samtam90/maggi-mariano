import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sigillo",
  canonical: links.servizi["frantoio-mobile-inerti"]["sigillo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sigillo",
  locationNames: { label: "Sigillo", href: "sigillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
