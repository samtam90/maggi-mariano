import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Perugia",
  canonical: links.servizi["frantoio-mobile-inerti"]["perugia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
