import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Porano",
  canonical: links.servizi["frantoio-mobile-inerti"]["porano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Porano",
  locationNames: { label: "Porano", href: "porano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
