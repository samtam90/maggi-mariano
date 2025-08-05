import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Reggio Emilia",
  canonical: links.servizi["frantoio-mobile-inerti"]["reggio-emilia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Reggio Emilia",
  locationNames: { label: "Reggio Emilia", href: "reggio-emilia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["reggio-emilia"],
      name: "Reggio Emilia",
  }),
});
