import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Gualdo Tadino",
  canonical: links.servizi["frantoio-mobile-inerti"]["gualdo-tadino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Gualdo Tadino",
  locationNames: { label: "Gualdo Tadino", href: "gualdo-tadino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
