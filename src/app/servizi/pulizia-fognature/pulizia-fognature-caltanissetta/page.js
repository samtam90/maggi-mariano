import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Caltanissetta",
  canonical: links.servizi["pulizia-fognature"]["caltanissetta"],
});
export default withBaseProps({
  title: "Pulizia fognature Caltanissetta",
  locationNames: { label: "Caltanissetta", href: "caltanissetta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
