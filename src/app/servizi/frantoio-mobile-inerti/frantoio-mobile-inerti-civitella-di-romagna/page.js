import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Civitella di Romagna",
  canonical: links.servizi["frantoio-mobile-inerti"]["civitella-di-romagna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Civitella di Romagna",
  locationNames: { label: "Civitella di Romagna", href: "civitella-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
