import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monte Santa Maria Tiberina",
  canonical: links.servizi["pulizia-fognature"]["monte-santa-maria-tiberina"],
});
export default withBaseProps({
  title: "Pulizia fognature Monte Santa Maria Tiberina",
  locationNames: { label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
