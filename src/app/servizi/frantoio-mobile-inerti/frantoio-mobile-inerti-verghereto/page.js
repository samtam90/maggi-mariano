import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Verghereto",
  canonical: links.servizi["frantoio-mobile-inerti"]["verghereto"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Verghereto",
  locationNames: { label: "Verghereto", href: "verghereto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
