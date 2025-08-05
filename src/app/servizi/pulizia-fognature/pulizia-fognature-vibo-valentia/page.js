import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Vibo Valentia",
  canonical: links.servizi["pulizia-fognature"]["vibo-valentia"],
});
export default withBaseProps({
  title: "Pulizia fognature Vibo Valentia",
  locationNames: { label: "Vibo Valentia", href: "vibo-valentia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
