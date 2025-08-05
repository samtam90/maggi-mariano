import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Parrano",
  canonical: links.servizi["frantoio-mobile-inerti"]["parrano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Parrano",
  locationNames: { label: "Parrano", href: "parrano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
