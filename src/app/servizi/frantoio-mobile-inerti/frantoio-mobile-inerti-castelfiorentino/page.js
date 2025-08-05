import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castelfiorentino",
  canonical: links.servizi["frantoio-mobile-inerti"]["castelfiorentino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castelfiorentino",
  locationNames: { label: "Castelfiorentino", href: "castelfiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
