import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Terranuova Bracciolini",
  canonical: links.servizi["pulizia-fognature"]["terranuova-bracciolini"],
});
export default withBaseProps({
  title: "Pulizia fognature Terranuova Bracciolini",
  locationNames: { label: "Terranuova Bracciolini", href: "terranuova-bracciolini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
