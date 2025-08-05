import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Alessandria",
  canonical: links.servizi["pulizia-fognature"]["alessandria"],
});
export default withBaseProps({
  title: "Pulizia fognature Alessandria",
  locationNames: { label: "Alessandria", href: "alessandria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["alessandria"],
      name: "Alessandria",
  }),
});
