import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Lodi",
  canonical: links.servizi["frantoio-mobile-inerti"]["lodi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Lodi",
  locationNames: { label: "Lodi", href: "lodi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["lodi"],
      name: "Lodi",
  }),
});
