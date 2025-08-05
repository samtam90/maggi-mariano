import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Scheggia e Pascelupo",
  canonical: links.servizi["frantoio-mobile-inerti"]["scheggia-e-pascelupo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Scheggia e Pascelupo",
  locationNames: { label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
