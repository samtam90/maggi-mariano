import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monza Brianza",
  canonical: links.servizi["pulizia-fognature"]["monza-brianza"],
});
export default withBaseProps({
  title: "Pulizia fognature Monza Brianza",
  locationNames: { label: "Monza Brianza", href: "monza-brianza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["monza-brianza"],
      name: "Monza Brianza",
  }),
});
