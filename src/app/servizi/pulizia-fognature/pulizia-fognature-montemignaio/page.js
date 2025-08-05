import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montemignaio",
  canonical: links.servizi["pulizia-fognature"]["montemignaio"],
});
export default withBaseProps({
  title: "Pulizia fognature Montemignaio",
  locationNames: { label: "Montemignaio", href: "montemignaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
