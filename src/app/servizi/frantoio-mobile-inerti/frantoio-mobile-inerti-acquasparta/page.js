import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Acquasparta",
  canonical: links.servizi["frantoio-mobile-inerti"]["acquasparta"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Acquasparta",
  locationNames: { label: "Acquasparta", href: "acquasparta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
