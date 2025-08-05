import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Caprese Michelangelo",
  canonical: links.servizi["pulizia-fognature"]["caprese-michelangelo"],
});
export default withBaseProps({
  title: "Pulizia fognature Caprese Michelangelo",
  locationNames: { label: "Caprese Michelangelo", href: "caprese-michelangelo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
