import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ascoli Piceno",
  canonical: links.servizi["pulizia-fognature"]["ascoli-piceno"],
});
export default withBaseProps({
  title: "Pulizia fognature Ascoli Piceno",
  locationNames: { label: "Ascoli Piceno", href: "ascoli-piceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["ascoli-piceno"],
      name: "Ascoli Piceno",
  }),
});
