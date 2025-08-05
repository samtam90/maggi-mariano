import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Penna in Teverina",
  canonical: links.servizi["pulizia-fognature"]["penna-in-teverina"],
});
export default withBaseProps({
  title: "Pulizia fognature Penna in Teverina",
  locationNames: { label: "Penna in Teverina", href: "penna-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
