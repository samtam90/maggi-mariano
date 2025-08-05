import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Trieste",
  canonical: links.servizi["frantoio-mobile-inerti"]["trieste"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Trieste",
  locationNames: { label: "Trieste", href: "trieste" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});
