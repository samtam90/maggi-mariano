import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Badia Prataglia",
  canonical: links.servizi["pulizia-fognature"]["badia-prataglia"],
});
export default withBaseProps({
  title: "Pulizia fognature Badia Prataglia",
  locationNames: { label: "Badia Prataglia", href: "badia-prataglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
