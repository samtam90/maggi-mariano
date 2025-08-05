import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Teramo",
  canonical: links.servizi["frantoio-mobile-inerti"]["teramo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Teramo",
  locationNames: { label: "Teramo", href: "teramo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["teramo"],
      name: "Teramo",
  }),
});
