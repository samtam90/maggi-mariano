import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Piegaro",
  canonical: links.servizi["pulizia-fognature"]["piegaro"],
});
export default withBaseProps({
  title: "Pulizia fognature Piegaro",
  locationNames: { label: "Piegaro", href: "piegaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
