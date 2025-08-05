import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Calenzano",
  canonical: links.servizi["frantoio-mobile-inerti"]["calenzano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Calenzano",
  locationNames: { label: "Calenzano", href: "calenzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
