import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castrocaro Terme e Terra del Sole",
  canonical: links.servizi["frantoio-mobile-inerti"]["castrocaro-terme-e-terra-del-sole"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castrocaro Terme e Terra del Sole",
  locationNames: { label: "Castrocaro Terme e Terra del Sole", href: "castrocaro-terme-e-terra-del-sole" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
