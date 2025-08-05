import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bagno a Ripoli",
  canonical: links.servizi["pulizia-fognature"]["bagno-a-ripoli"],
});
export default withBaseProps({
  title: "Pulizia fognature Bagno a Ripoli",
  locationNames: { label: "Bagno a Ripoli", href: "bagno-a-ripoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
