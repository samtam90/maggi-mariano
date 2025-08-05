import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Salerno",
  canonical: links.servizi["frantoio-mobile-inerti"]["salerno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Salerno",
  locationNames: { label: "Salerno", href: "salerno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["salerno"],
      name: "Salerno",
  }),
});
