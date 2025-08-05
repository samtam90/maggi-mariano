import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Oristano",
  canonical: links.servizi["frantoio-mobile-inerti"]["oristano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Oristano",
  locationNames: { label: "Oristano", href: "oristano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
