import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cuneo",
  canonical: links.servizi["frantoio-mobile-inerti"]["cuneo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cuneo",
  locationNames: { label: "Cuneo", href: "cuneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["cuneo"],
      name: "Cuneo",
  }),
});
