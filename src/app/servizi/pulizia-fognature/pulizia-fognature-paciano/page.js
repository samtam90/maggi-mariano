import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Paciano",
  canonical: links.servizi["pulizia-fognature"]["paciano"],
});
export default withBaseProps({
  title: "Pulizia fognature Paciano",
  locationNames: { label: "Paciano", href: "paciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
