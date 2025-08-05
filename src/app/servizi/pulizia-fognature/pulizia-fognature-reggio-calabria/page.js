import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Reggio Calabria",
  canonical: links.servizi["pulizia-fognature"]["reggio-calabria"],
});
export default withBaseProps({
  title: "Pulizia fognature Reggio Calabria",
  locationNames: { label: "Reggio Calabria", href: "reggio-calabria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["reggio-calabria"],
      name: "Reggio Calabria",
  }),
});
