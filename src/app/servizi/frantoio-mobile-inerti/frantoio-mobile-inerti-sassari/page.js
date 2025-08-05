import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sassari",
  canonical: links.servizi["frantoio-mobile-inerti"]["sassari"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sassari",
  locationNames: { label: "Sassari", href: "sassari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
