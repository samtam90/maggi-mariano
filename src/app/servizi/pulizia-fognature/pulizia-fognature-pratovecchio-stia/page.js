import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pratovecchio Stia",
  canonical: links.servizi["pulizia-fognature"]["pratovecchio-stia"],
});
export default withBaseProps({
  title: "Pulizia fognature Pratovecchio Stia",
  locationNames: { label: "Pratovecchio Stia", href: "pratovecchio-stia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
