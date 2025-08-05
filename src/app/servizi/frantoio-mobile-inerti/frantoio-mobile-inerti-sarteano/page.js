import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sarteano",
  canonical: links.servizi["frantoio-mobile-inerti"]["sarteano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sarteano",
  locationNames: { label: "Sarteano", href: "sarteano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
