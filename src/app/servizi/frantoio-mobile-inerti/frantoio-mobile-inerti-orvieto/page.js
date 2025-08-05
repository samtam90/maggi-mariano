import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Orvieto",
  canonical: links.servizi["frantoio-mobile-inerti"]["orvieto"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Orvieto",
  locationNames: { label: "Orvieto", href: "orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
