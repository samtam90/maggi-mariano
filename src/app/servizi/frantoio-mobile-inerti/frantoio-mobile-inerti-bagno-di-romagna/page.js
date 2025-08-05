import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bagno di Romagna",
  canonical: links.servizi["frantoio-mobile-inerti"]["bagno-di-romagna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bagno di Romagna",
  locationNames: { label: "Bagno di Romagna", href: "bagno-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
