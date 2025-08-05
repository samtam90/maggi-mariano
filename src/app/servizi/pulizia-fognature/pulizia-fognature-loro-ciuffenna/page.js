import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Loro ciuffenna",
  canonical: links.servizi["pulizia-fognature"]["loro-ciuffenna"],
});
export default withBaseProps({
  title: "Pulizia fognature Loro ciuffenna",
  locationNames: { label: "Loro ciuffenna", href: "loro-ciuffenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
