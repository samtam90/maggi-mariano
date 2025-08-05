import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Siracusa",
  canonical: links.servizi["frantoio-mobile-inerti"]["siracusa"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Siracusa",
  locationNames: { label: "Siracusa", href: "siracusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siracusa"],
      name: "Siracusa",
  }),
});
