import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Parma",
  canonical: links.servizi["pulizia-fognature"]["parma"],
});
export default withBaseProps({
  title: "Pulizia fognature Parma",
  locationNames: { label: "Parma", href: "parma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["parma"],
      name: "Parma",
  }),
});
