import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Nocera Umbra",
  canonical: links.servizi["frantoio-mobile-inerti"]["nocera-umbra"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Nocera Umbra",
  locationNames: { label: "Nocera Umbra", href: "nocera-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
