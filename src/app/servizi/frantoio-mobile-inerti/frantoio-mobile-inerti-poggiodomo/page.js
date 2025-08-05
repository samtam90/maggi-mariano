import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Poggiodomo",
  canonical: links.servizi["frantoio-mobile-inerti"]["poggiodomo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Poggiodomo",
  locationNames: { label: "Poggiodomo", href: "poggiodomo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
