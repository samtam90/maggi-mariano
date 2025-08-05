import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montiano",
  canonical: links.servizi["frantoio-mobile-inerti"]["montiano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montiano",
  locationNames: { label: "Montiano", href: "montiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
