import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature L'Aquila",
  canonical: links.servizi["pulizia-fognature"]["l-aquila"],
});
export default withBaseProps({
  title: "Pulizia fognature L'Aquila",
  locationNames: { label: "L'Aquila", href: "l-aquila" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["l-aquila"],
      name: "L'Aquila",
  }),
});
