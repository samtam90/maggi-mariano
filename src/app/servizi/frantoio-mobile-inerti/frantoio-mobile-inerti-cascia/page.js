import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cascia",
  canonical: links.servizi["frantoio-mobile-inerti"]["cascia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cascia",
  locationNames: { label: "Cascia", href: "cascia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
