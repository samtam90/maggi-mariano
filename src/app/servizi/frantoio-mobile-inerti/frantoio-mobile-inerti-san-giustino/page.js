import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Giustino",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-giustino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Giustino",
  locationNames: { label: "San Giustino", href: "san-giustino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
