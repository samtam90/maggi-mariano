import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Norcia",
  canonical: links.servizi["frantoio-mobile-inerti"]["norcia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Norcia",
  locationNames: { label: "Norcia", href: "norcia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
