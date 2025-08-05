import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bari",
  canonical: links.servizi["frantoio-mobile-inerti"]["bari"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bari",
  locationNames: { label: "Bari", href: "bari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
