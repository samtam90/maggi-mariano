import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Penna in Teverina",
  canonical: links.servizi["frantoio-mobile-inerti"]["penna-in-teverina"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Penna in Teverina",
  locationNames: { label: "Penna in Teverina", href: "penna-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
