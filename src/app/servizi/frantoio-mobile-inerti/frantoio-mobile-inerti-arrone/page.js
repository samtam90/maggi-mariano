import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Arrone",
  canonical: links.servizi["frantoio-mobile-inerti"]["arrone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Arrone",
  locationNames: { label: "Arrone", href: "arrone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
