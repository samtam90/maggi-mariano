import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Vicenza",
  canonical: links.servizi["frantoio-mobile-inerti"]["vicenza"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Vicenza",
  locationNames: { label: "Vicenza", href: "vicenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["vicenza"],
      name: "Vicenza",
  }),
});
