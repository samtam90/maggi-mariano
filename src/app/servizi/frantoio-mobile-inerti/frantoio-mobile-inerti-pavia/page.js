import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pavia",
  canonical: links.servizi["frantoio-mobile-inerti"]["pavia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pavia",
  locationNames: { label: "Pavia", href: "pavia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});
