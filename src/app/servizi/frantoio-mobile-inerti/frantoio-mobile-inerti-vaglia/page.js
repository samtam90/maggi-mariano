import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Vaglia",
  canonical: links.servizi["frantoio-mobile-inerti"]["vaglia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Vaglia",
  locationNames: { label: "Vaglia", href: "vaglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
