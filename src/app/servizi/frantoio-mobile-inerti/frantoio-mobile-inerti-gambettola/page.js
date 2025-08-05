import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Gambettola",
  canonical: links.servizi["frantoio-mobile-inerti"]["gambettola"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Gambettola",
  locationNames: { label: "Gambettola", href: "gambettola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
