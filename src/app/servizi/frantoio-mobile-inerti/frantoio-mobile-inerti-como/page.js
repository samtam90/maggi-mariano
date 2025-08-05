import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Como",
  canonical: links.servizi["frantoio-mobile-inerti"]["como"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Como",
  locationNames: { label: "Como", href: "como" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["como"],
      name: "Como",
  }),
});
