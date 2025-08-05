import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sellano",
  canonical: links.servizi["pulizia-fognature"]["sellano"],
});
export default withBaseProps({
  title: "Pulizia fognature Sellano",
  locationNames: { label: "Sellano", href: "sellano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
