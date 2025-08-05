import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Piacenza",
  canonical: links.servizi["frantoio-mobile-inerti"]["piacenza"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Piacenza",
  locationNames: { label: "Piacenza", href: "piacenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["piacenza"],
      name: "Piacenza",
  }),
});
