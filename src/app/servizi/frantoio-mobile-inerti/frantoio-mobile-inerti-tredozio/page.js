import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Tredozio",
  canonical: links.servizi["frantoio-mobile-inerti"]["tredozio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Tredozio",
  locationNames: { label: "Tredozio", href: "tredozio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
