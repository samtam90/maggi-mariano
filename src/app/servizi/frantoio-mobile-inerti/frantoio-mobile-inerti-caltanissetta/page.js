import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Caltanissetta",
  canonical: links.servizi["frantoio-mobile-inerti"]["caltanissetta"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Caltanissetta",
  locationNames: { label: "Caltanissetta", href: "caltanissetta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
