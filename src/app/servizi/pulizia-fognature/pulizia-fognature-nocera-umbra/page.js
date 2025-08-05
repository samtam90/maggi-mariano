import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Nocera Umbra",
  canonical: links.servizi["pulizia-fognature"]["nocera-umbra"],
});
export default withBaseProps({
  title: "Pulizia fognature Nocera Umbra",
  locationNames: { label: "Nocera Umbra", href: "nocera-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
