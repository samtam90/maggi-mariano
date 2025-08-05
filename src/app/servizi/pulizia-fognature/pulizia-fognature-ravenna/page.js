import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ravenna",
  canonical: links.servizi["pulizia-fognature"]["ravenna"],
});
export default withBaseProps({
  title: "Pulizia fognature Ravenna",
  locationNames: { label: "Ravenna", href: "ravenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
