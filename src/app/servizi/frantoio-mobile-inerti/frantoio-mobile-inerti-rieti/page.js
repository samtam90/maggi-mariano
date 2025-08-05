import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Rieti",
  canonical: links.servizi["frantoio-mobile-inerti"]["rieti"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Rieti",
  locationNames: { label: "Rieti", href: "rieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
