import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Monteleone d'Orvieto",
  canonical: links.servizi["frantoio-mobile-inerti"]["monteleone-d-orvieto"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Monteleone d'Orvieto",
  locationNames: { label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
