import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Reggio Emilia",
  canonical: links.servizi["pulizia-fognature"]["reggio-emilia"],
});
export default withBaseProps({
  title: "Pulizia fognature Reggio Emilia",
  locationNames: { label: "Reggio Emilia", href: "reggio-emilia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["reggio-emilia"],
      name: "Reggio Emilia",
  }),
});
