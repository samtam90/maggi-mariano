import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Macerata",
  canonical: links.servizi["pulizia-fognature"]["macerata"],
});
export default withBaseProps({
  title: "Pulizia fognature Macerata",
  locationNames: { label: "Macerata", href: "macerata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
